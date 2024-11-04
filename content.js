class SolanaAddressScanner {
  constructor() {
    // Solana address regex - more precise to avoid false positives
    this.solanaAddressRegex =
      /[1-9A-HJ-NP-Za-km-z]{32,44}(?![1-9A-HJ-NP-Za-km-z])/g;
    this.processedElements = new WeakSet();
    this.throttleTimeout = null;
  }

  init() {
    // Add styles once at initialization
    this.addStyles();

    // Initial scan
    this.throttledScan();

    // Set up mutation observer for new content
    this.observeChanges();
  }

  addStyles() {
    const style = document.createElement("style");
    style.textContent = `
      .solana-link {
        display: inline-flex;
        align-items: center;
        margin-left: 4px;
        text-decoration: none;
        opacity: 0.8;
        transition: opacity 0.2s ease;
      }
      .solana-link:hover {
        opacity: 1;
      }
      .solana-link img {
        border-radius: 2px;
      }
    `;
    document.head.appendChild(style);
  }

  observeChanges() {
    // Create a mutation observer instance
    const observer = new MutationObserver(() => {
      this.throttledScan();
    });

    // Configure and start the observer
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  }

  throttledScan() {
    // Clear existing timeout
    if (this.throttleTimeout) {
      clearTimeout(this.throttleTimeout);
    }

    // Set new timeout
    this.throttleTimeout = setTimeout(() => {
      this.scanPage();
    }, 1000);
  }

  scanPage() {
    // Only scan tweet text containers
    const tweetTexts = document.querySelectorAll('[data-testid="tweetText"]');
    tweetTexts.forEach((element) => {
      if (!this.processedElements.has(element)) {
        this.processElement(element);
      }
    });
  }

  processElement(element) {
    const text = element.textContent;
    const matches = text.match(this.solanaAddressRegex);

    if (matches) {
      matches.forEach((address) => {
        // Find the text node containing the address
        this.findAndProcessTextNode(element, address);
      });
    }

    this.processedElements.add(element);
  }

  findAndProcessTextNode(element, address) {
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    let node;
    while ((node = walker.nextNode())) {
      if (node.textContent.includes(address)) {
        this.insertLink(node, address);
        break;
      }
    }
  }

  insertLink(textNode, address) {
    const text = textNode.textContent;
    const index = text.indexOf(address);

    if (index === -1) return;

    // Split the text node
    const before = text.substring(0, index + address.length);
    const after = text.substring(index + address.length);

    // Create new nodes
    const beforeNode = document.createTextNode(before);
    const afterNode = document.createTextNode(after);
    const link = this.createSolscanLink(address);

    // Replace the original text node
    const parent = textNode.parentNode;
    parent.replaceChild(afterNode, textNode);
    parent.insertBefore(link, afterNode);
    parent.insertBefore(beforeNode, link);
  }

  createSolscanLink(address) {
    const link = document.createElement("a");
    link.href = `https://solscan.io/account/${address}`;
    link.className = "solana-link";

    // Create an image element instead of using emoji
    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("assets/Solscan-logo.png");
    img.style.width = "14px"; // Set appropriate size
    img.style.height = "14px";
    img.style.verticalAlign = "middle";

    link.appendChild(img);
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  }
}

// Initialize the scanner
const scanner = new SolanaAddressScanner();
scanner.init();
