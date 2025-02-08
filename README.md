# Fandom Wiki Search Filter

## Overview
Fandom Search Filter is a lightweight Chrome extension that automatically removes Fandom wiki results from Google search pages.

## Installation
1. Download or clone the repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension directory

## How It Works
The extension uses Chrome's content script API to:
1. Monitor Google search result pages
2. Identify results containing fandom.com URLs
3. Remove these results from the page
4. Continue monitoring for dynamically loaded results

## Project Structure
```
fandom-filter/
├── manifest.json    # Extension configuration
├── content.js      # Main filtering logic
├── LICENSE         # MIT License
└── README.md       # Project documentation
```

