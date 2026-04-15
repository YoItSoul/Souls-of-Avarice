# Souls of Avarice

Configuration, scripts, and modpack-side content for the **Souls of Avarice** Minecraft modpack.

## What's in this repo

This repository tracks only the authored/edited parts of the modpack instance — not mods, worlds, or runtime data.

| Path               | Contents                                                       |
| ------------------ | -------------------------------------------------------------- |
| `config/`          | Per-mod config files                                           |
| `kubejs/`          | KubeJS startup / server / client scripts, assets, data         |
| `patchouli_books/` | Custom Patchouli guidebook entries                             |
| `scripts/`         | CraftTweaker / other scripting                                 |
| `soa_additions/`   | Staging content for the `soa_additions` companion mod/datapack |
| `thingpacks/`      | Thingpack definitions                                          |
| `options.txt`      | Default client options                                         |
| `servers.dat`      | Default multiplayer server list                                |

Mods, saves, logs, caches, crash reports, resource packs, shader packs, and downloads are intentionally **not** tracked — see `.gitignore`.

## Reporting issues

### Modpack issues → here
Crashes, config bugs, mod interaction problems, KubeJS script errors, performance regressions, recipe problems from CraftTweaker, etc.

→ [Open an issue](../../issues/new/choose)

### `soa_additions` content issues → separate repo
Anything originating from the `soa_additions` companion (custom quests, custom loot, custom items/blocks, custom recipes shipped by that mod/datapack) belongs in its own tracker — **it is easy to confuse the two**, so please check which side the bug is on before filing.

→ https://github.com/YoItSoul/soa_additions/issues

## Contributing

1. Clone into your modpack instance directory, or set this repo as the instance's working tree.
2. Edit only files under the tracked paths above.
3. Test in-game before committing.
4. Use clear commit messages (e.g. `config: tune apotheosis drop rates`, `kubejs: fix quest reward script`).

## License

See [LICENSE](LICENSE) if present. Mod files shipped with the pack retain their original authors' licenses.
