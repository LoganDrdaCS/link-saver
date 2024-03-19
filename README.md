# Link Saver

This is a simple, lightweight Chrome extension that can save active URLs or have them manually entered and saved. Good for when you don't want to create/organize a bookmark in your browser. I am currently working on additional features.

I was self studying JavaScript (see [Acknowledgements](#acknowledgements)) and I was fond of the extension that was built during the course. The extension would be great for my everyday use, so I decided to expand upon the extension (detailed in [Modifications](#modifications)).

## Table of Contents

- [Modifications](#modifications)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)

## Modifications

Both completed and in-the-works changes:

- [x] Add steps in index.js to remove event listeners when the extension popup is closed to prevent memory leakage
- [x] Add a string truncation function to ensure that extremely long URLs don't wrap and overflow the available popup space
- [x] New extension icon
- [x] New normalize.css
- [x] Update manifest.json to include description and storage permissions
- [x] New styling (mainly button-container to give the extension a more 'centered' feeling)
- [x] Add metadata to index.html
- [x] Add placeholder text to input bar
- [x] Comment the entirity of index.js
- [ ] Add a 'trash' icon next to each link for manual deletion of specified links
- [ ] Add data validation so that manually-entered URLs are checked and that duplicate links aren't saved
- [ ] Additional styling

## Installation

Once you have your hands on this project, you will need to load the unpacked extension in Chrome. Follow this official link for directions:

https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked

## Usage

Once you have the extension popup open, you may manually enter a URL in the input bar and click the "Manual Input" button, you may save the active URL with the "Save Tab" button, or you may clear all extension memory by double-clicking the "Delete All" button.

## Contributing

To contribute to this project (particularly with styling), please follow these steps:

1. **Fork** the repository.
2. **Clone** your forked repository to your local machine.
3. **Create a new branch** (`git checkout -b feature/new-feature`).
4. **Make your changes** and commit them (`git commit -am 'Add new feature'`).
5. **Push** your changes to your forked repository (`git push origin feature/new-feature`).
6. **Submit a pull request** detailing your changes and any relevant information.

## Acknowledgements

- Per Harald Borgen: CEO of Scrimba.
- [Learn JavaScript](https://scrimba.com/learn/learnjavascript): The initial framework of this extension.
