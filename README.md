# Souls of Avarice

<p align="center">
  <img src="https://img.shields.io/badge/Minecraft-1.20.1-62B47A?style=for-the-badge&logo=curseforge" alt="Minecraft 1.20.1"/>
  <img src="https://img.shields.io/badge/Forge-47.4.10-E04E14?style=for-the-badge&logo=curseforge" alt="Forge 47.4.10"/>
  <img src="https://img.shields.io/badge/Loader-Forge-1B1F23?style=for-the-badge&logo=apachemaven&logoColor=white" alt="Forge"/>
  <img src="https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=for-the-badge" alt="All Rights Reserved"/>
</p>

<p align="center">
  <a href="https://ko-fi.com/yoitsoul"><img src="https://img.shields.io/badge/Ko--fi-Support%20YoItSoul-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white" alt="Support on Ko-fi"/></a>
  <a href="https://github.com/YoItSoul/soa_additions"><img src="https://img.shields.io/badge/Companion-soa__additions-8957E5?style=for-the-badge&logo=github&logoColor=white" alt="soa_additions companion repo"/></a>
</p>

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

## Support the project

If you enjoy the pack and want to help keep it cooking, you can throw a coin in the jar:

[![Ko-fi](https://img.shields.io/badge/Ko--fi-ko--fi.com%2Fyoitsoul-FF5E5B?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/yoitsoul)

## License

See [LICENSE](LICENSE) if present. Mod files shipped with the pack retain their original authors' licenses.
