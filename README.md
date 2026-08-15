<h1 align="center">
  <img src="ressources/logo/lichess_chess_logo.png" alt="Lichess enhancement logo" width="400">
</h1>

<p align="center">♟️ New pieces, boards and sounds for <a href="https://lichess.org">lichess.org</a>, including the chess.com styles.</p>

---

## Features

- **61 piece sets** — chess.com (2D and 3D), Chessfactory, Maurizio Monge, and community sets (Amogus, Doge, Pony…)
- **33 board themes** — chess.com boards plus a few extras
- **10 sound sets** — replaces the lichess move / capture / check / checkmate sounds with chess.com sound themes
- A **preview page** showing every piece set and board (link inside the popup)

Everything is configured from the extension popup and applies immediately to the active lichess tab.

## Installation

Install it unpacked from this repository:

1. Download the repo (**Code → Download ZIP**) and unzip it, or `git clone` it.
2. Open `chrome://extensions` and enable **Developer mode** (top right).
3. Click **Load unpacked** and select the extension folder.

> The [Chrome Web Store listing](https://chrome.google.com/webstore/detail/lichess-enhancement/ikmpcihcohdjammgkopfgohojdelmfoi) belongs to the original author and still ships version 4 (2022): it predates the sound feature and several important fixes. Prefer the manual installation above until a new version is published.

Firefox is not supported yet — see [issue #2](https://github.com/basedpolymer/lichess_enhancement/issues/2) (MV3 `background.service_worker`, promise-based `chrome.*` calls and `world: "MAIN"` script injection all need Firefox-specific handling).

## How it works

- **Pieces and boards**: a content script injects a stylesheet on lichess pages that overrides the piece sprites (`piece.<color>.<role>`) and the board texture (`cg-board::before`) with images bundled in the extension.
- **Sounds**: `declarativeNetRequest` rules redirect the lichess sound files (`Move`, `Capture`, `Check`, `Checkmate`) to the mp3 files of the selected sound set. No network request leaves the extension: everything is served locally.

## Contributing

Bug reports and new sets are welcome — open an [issue](https://github.com/basedpolymer/lichess_enhancement/issues) or a pull request. To add a piece set, drop 12 files named `bb, bk, bn, bp, bq, br, wb, wk, wn, wp, wq, wr` (`.png`) in `ressources/pieces/<set_name>/` (lowercase folder name), then add the matching `<option>` in `index.html` and a row in `ressources/preview/index.html`. `scripts/downloadStylesFromChesscom.py` can help fetching chess.com styles.

## Credits & legal

Piece and board artwork and sounds belong to their respective authors — see [`ressources/pieces/credits.md`](ressources/pieces/credits.md) and [`ressources/boards/credits.md`](ressources/boards/credits.md). This is an unofficial project, not affiliated with lichess.org or chess.com.
