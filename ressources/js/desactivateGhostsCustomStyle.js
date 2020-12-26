var checkbox_ghost = document.getElementById('desactivateGhostsCustomStyle')

chrome.storage.sync.get('desactivateGhostsCustomStyle', function(data) {
    desactivateGhostsCustomStyle.checked = data.desactivateGhostsCustomStyle
})

desactivateGhostsCustomStyle.onchange = function(element) {
    let value = this.checked

    chrome.storage.sync.set({'desactivateGhostsCustomStyle': value}, function() {
        console.log('New value for checkbox: ' + value)
    })

    chrome.tabs.query({
        active: true,
        currentWindow: true,
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "desactivateGhostsCustomStyle": value
        })
    })
}