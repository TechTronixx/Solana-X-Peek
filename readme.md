<div align="center">
  <img src="icons/icon-48.png" alt="Solana-X-Peek Icon" width="80" height="80"/>
  
  # Solana-X-Peek

  <p>
    <a href="#features">Features</a> •
    <a href="#installation">Installation</a> •
    <a href="#how-it-works">How It Works</a> •
    <a href="#privacy--security">Privacy</a>
  </p>
</div>

---

<div align="center">
  <p>A lightweight Firefox extension that automatically detects Solana wallet addresses on Twitter/X and converts them into clickable links to Solscan explorer.</p>
</div>

## ✨ Features

- 🔍 Real-time scanning of tweets for Solana addresses
- 🔗 Automatic conversion to clickable Solscan links
- 💫 Clean UI with hover animations
- ⚡ Efficient performance with throttled scanning
- 🌐 Works on both Twitter.com and X.com domains

## 🚀 How It Works

The extension scans tweet content for Solana wallet addresses using a precise regex pattern. When an address is found, it:

1. Creates an unobtrusive link next to the address
2. Adds the Solscan logo as a visual indicator
3. Opens the wallet details in Solscan site when clicked

## 🛠 Technical Implementation

- Uses MutationObserver for dynamic content updates
- Implements throttling to optimize performance
- Maintains processed elements in WeakSet to prevent duplicates
- Handles DOM manipulation carefully to preserve tweet formatting

## 📥 Installation

### Firefox Add-ons Store (coming soon)

1. Visit the Firefox Add-ons Store [link to be added]
2. Click "Add to Firefox"
3. Follow the prompts to complete installation

### Manual Installation (Developer)

1. Clone this repository
2. Open Firefox and navigate to `about:debugging`
3. Click "This Firefox" in the left sidebar
4. Click "Load Temporary Add-on"
5. Navigate to the extension directory and select `manifest.json`

## 📸 Demo Images

[Place demo screenshots here showing:]

- Before/After of address detection
- Hover state on the Solscan link
- Example of Solscan explorer integration

## 🔒 Privacy & Security

- No data collection or storage
- Works entirely client-side
- Only activates on Twitter/X domains
- Requires minimal permissions

## 🔮 Future Improvements

- Support for additional Solana explorers
- Add clipboard copy functionality to address
- Enhanced UI/UX features
- Mobile support optimization

## 🦊 Firefox-Specific Notes

- Compatible with Firefox 109.0 and later
- Uses Firefox's WebExtensions API
- Follows Mozilla's Add-on policies and guidelines
- Optimized for Firefox's rendering engine

## 📄 License

MIT License - feel free to use and modify as needed.

---

<div align="center">
  <p>Made with ❤️ for the Solana Community</p>
</div>
