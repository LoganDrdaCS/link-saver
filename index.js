const inputBar = document.getElementById("input-bar")
const inputButton = document.getElementById("manual-button")
const ulElement = document.getElementById("ul-element")
const deleteButton = document.getElementById("delete-button")
const linksLocal = JSON.parse(localStorage.getItem("myLinks"))
const tabButton = document.getElementById("tab-button")

let myLinks = []

// Start popup with the input bar focused
inputBar.focus()

// Checking if any local storage from previous sessions
if (linksLocal) {
    myLinks = linksLocal
    renderList(myLinks)
}

// Saving a manually-entered URL by clicking button
const inputFunction = () => {
    myLinks.push(inputBar.value)
    inputBar.value = ""
    localStorage.setItem("myLinks", JSON.stringify(myLinks))
    renderList(myLinks)
    inputBar.focus()
}
inputButton.addEventListener("click", inputFunction)

// Obtaining the active URL in Chrome and saving to storage after clicking button
const tabFunction = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks))
        renderList(myLinks)
        inputBar.focus()
    })
}
tabButton.addEventListener("click", tabFunction)

// Deleting local storage and cleaning up the display
const deleteFunction = () => {
    localStorage.clear()
    myLinks = []
    renderList(myLinks)
    inputBar.focus()
}
deleteButton.addEventListener("dblclick", deleteFunction)

// Cutting down on the URL length to avoid the full display of very long links
function truncateString(str) {
    if (str.length > 80) {
        return str.substring(0, 80) + "...";
    } else {
        return str;
    }
}

// Rendering the list to screen
function renderList(links) {
    let realUrl = ""
    let displayedUrl = ""
    let listItems = ""
    for (let i = 0; i < links.length; i++) {
        realUrl = links[i]
        displayedUrl = truncateString(links[i])
        listItems += `
            <li>
                <a target='_blank' href='${realUrl}'>
                    ${displayedUrl}
                </a>
            </li>
        `
    }
    ulElement.innerHTML = listItems
}

chrome.runtime.onConnect.addListener(function (port) {
    port.onDisconnect.addListener(function () {
        // When the popup is closed, remove all event listeners
        inputButton.removeEventListener("click", inputFunction)
        tabButton.removeEventListener("click", tabFunction)
        deleteButton.removeEventListener("dblclick", deleteFunction)
    });
});