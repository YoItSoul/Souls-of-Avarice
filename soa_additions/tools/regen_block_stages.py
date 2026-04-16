#!/usr/bin/env python3
# Regenerates kubejs/server_scripts/soa_block_stages.js from
# scripts/soa_item_stages.zs and soa_exports/tags.json.
#
# KubeJS's class filter blocks java.nio / java.io, so the map is baked
# into the JS as a literal. Tag rules are expanded to their member items
# at generation time, so the runtime only needs a flat item-id dict
# lookup — no Ingredient resolution needed.
#
# If tags in the pack change (new mod, datapack), regenerate tags.json
# first (via your existing soa_exports pipeline) and re-run this.
#
# Run from the pack root: python soa_additions/tools/regen_block_stages.py

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC_ZS = ROOT / "scripts" / "soa_item_stages.zs"
SRC_TAGS = ROOT / "soa_exports" / "tags.json"
DST = ROOT / "kubejs" / "server_scripts" / "soa_block_stages.js"

RULE_RE = re.compile(r'ItemStages\.restrict\(<(item|tag:items):([^>]+)>\s*,\s*(.*?)\);')
STAGE_RE = re.compile(r'"([^"]+)"')


def load_item_tags():
    """tag_id -> [item_id, ...] from the exported tags.json (item registry only)."""
    data = json.loads(SRC_TAGS.read_text(encoding="utf-8"))
    tag_items = {}
    for e in data["entries"]:
        if e.get("registry") != "item":
            continue
        tid = e["tag"].lstrip("#")
        tag_items[tid] = list(e.get("entries", []))
    return tag_items


def parse_zs():
    items = {}  # item_id -> [stage, ...]
    tags = {}   # tag_id  -> [stage, ...]
    for line in SRC_ZS.read_text(encoding="utf-8").splitlines():
        m = RULE_RE.match(line)
        if not m:
            continue
        kind, ident, rest = m.groups()
        stages = STAGE_RE.findall(rest)
        (items if kind == "item" else tags)[ident] = stages
    return items, tags


def build_flat(items, tags, tag_items):
    """Merge tag rules into items. Returns (merged_items, stats)."""
    merged = dict(items)
    unresolved = []
    for tag_id, stages in tags.items():
        members = tag_items.get(tag_id)
        if not members:
            unresolved.append(tag_id)
            continue
        for item_id in members:
            existing = merged.get(item_id, [])
            # union stages while preserving order and uniqueness
            combined = list(existing)
            for s in stages:
                if s not in combined:
                    combined.append(s)
            merged[item_id] = combined
    return merged, unresolved


def emit_map(d):
    out = []
    for k in sorted(d.keys()):
        stages = ", ".join(f'"{s}"' for s in d[k])
        out.append(f'    "{k}": [{stages}]')
    return ",\n".join(out)


TEMPLATE = '''// ============================================================
// SoA Block Stages
// Gates right-click interaction on already-placed blocks behind
// gamestages. Generated from scripts/soa_item_stages.zs with tag
// membership resolved from soa_exports/tags.json.
//
// Regenerate: python soa_additions/tools/regen_block_stages.py
// (KubeJS class filter blocks java.nio/java.io, so data is inlined.)
//
// Creative / spectator players bypass all checks.
// ============================================================

let GameStageHelper = null
try {{
    GameStageHelper = Java.loadClass("net.darkhax.gamestages.GameStageHelper")
}} catch (e) {{
    console.error("[soa_block_stages] GameStages not found; gating disabled: " + e)
}}

const ITEM_STAGES = {{
{items}
}}

console.info("[soa_block_stages] loaded " + Object.keys(ITEM_STAGES).length + " item rules")

function missingStage(player, itemId) {{
    if (!GameStageHelper) return null
    const rules = ITEM_STAGES[itemId]
    if (!rules) return null
    for (let i = 0; i < rules.length; i++) {{
        if (!GameStageHelper.hasStage(player, rules[i])) return rules[i]
    }}
    return null
}}

BlockEvents.rightClicked(event => {{
    const player = event.player
    if (!player) return
    if (player.isCreative() || player.isSpectator()) return

    const block = event.block
    if (!block) return
    const itemId = String(block.id)
    if (itemId === "minecraft:air") return

    const stage = missingStage(player, itemId)
    if (stage === null) return

    event.cancel()
    player.tell(Text.red("You lack the required stage: " + stage))
}})
'''


def main():
    if not SRC_ZS.exists():
        sys.exit(f"source not found: {SRC_ZS}")
    if not SRC_TAGS.exists():
        sys.exit(f"tags export not found: {SRC_TAGS}")
    tag_items = load_item_tags()
    items, tags = parse_zs()
    merged, unresolved = build_flat(items, tags, tag_items)
    DST.write_text(
        TEMPLATE.format(items=emit_map(merged)),
        encoding="utf-8",
        newline="\n",
    )
    print(
        f"wrote {DST}\n"
        f"  {len(items)} item rules, {len(tags)} tag rules -> "
        f"{len(merged)} flat item rules"
    )
    if unresolved:
        print(
            f"  warning: {len(unresolved)} tag(s) had no members in tags.json "
            f"(rule will be a no-op):"
        )
        for t in unresolved:
            print(f"    {t}")


if __name__ == "__main__":
    main()
