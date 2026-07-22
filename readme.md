<div align="center">
  <img src="icons/icon-96.png" alt="Solana-X-Peek icon" width="80" height="80"/>

  # Solana-X-Peek
</div>

<div align="center">

![Firefox](https://img.shields.io/badge/Firefox-add--on-FF7139?logo=firefoxbrowser&logoColor=white)
![Manifest](https://img.shields.io/badge/manifest-v2-blue)
![License](https://img.shields.io/github/license/TechTronixx/Solana-X-Peek)
![Issues](https://img.shields.io/github/issues/TechTronixx/Solana-X-Peek)
![Stars](https://img.shields.io/github/stars/TechTronixx/Solana-X-Peek)
![Last commit](https://img.shields.io/github/last-commit/TechTronixx/Solana-X-Peek)

</div>

A Firefox extension that detects Solana wallet addresses in tweets on X (Twitter) and adds a clickable Solscan link next to each one.

<div align="center">
  <img src="layout-assets/Example-1.png" alt="A Solana address in a tweet with a Solscan link beside it" width="600"/>
  <br/>
  <img src="layout-assets/Solanaxpeek-demogif.gif" alt="The Solscan link being clicked in a live tweet" width="600"/>
</div>

## Features

- Scans tweet text for Solana addresses as you browse
- Adds a Solscan link (`solscan.io/account/<address>`) beside each match
- Works on both `twitter.com` and `x.com`
- Reacts to new tweets loaded on scroll via `MutationObserver`, throttled to one scan per second
- Runs entirely in the browser, no accounts or network calls of its own

## Requirements

- Firefox (any recent version that supports Manifest V2 extensions)

## Install

Not yet on the Firefox Add-ons store. Load it manually:

1. Clone this repository:
   ```bash
   git clone https://github.com/TechTronixx/Solana-X-Peek.git
   ```
2. Open Firefox and go to `about:debugging`.
3. Click **This Firefox** in the sidebar.
4. Click **Load Temporary Add-on**.
5. Select the `manifest.json` file in the cloned folder.

The extension stays loaded until you restart Firefox.

## Usage

Open X or Twitter and browse normally. When a tweet contains a Solana address, a small Solscan logo appears just after it. Click the logo to open that account on Solscan in a new tab.

## How it works

Scans tweet text for base58 strings that match the Solana address length. When found, a Solscan link is inserted next to the address. New tweets loaded on scroll are picked up automatically.

Note: the pattern is a heuristic, so an unrelated string of the right length can occasionally get a link.

## Privacy

- No data collection or storage
- No network requests except the Solscan link you click
- Runs only on `twitter.com` and `x.com`
- Requests only the `activeTab` and `storage` permissions

## Roadmap

- Support for additional Solana explorers
- Copy-address-to-clipboard action

## License

[MIT](LICENSE) © TechTronixx

---

<div align="center">
  <p>Made with ❤️ for the Solana Community</p>
</div>
