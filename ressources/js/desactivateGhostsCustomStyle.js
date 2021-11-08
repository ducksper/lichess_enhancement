var checkbox_ghost = document.getElementById('desactivateGhostsCustomStyle')

browser.storage.sync.get('desactivateGhostsCustomStyle', function(data) {
    desactivateGhostsCustomStyle.checked = data.desactivateGhostsCustomStyle
})

desactivateGhostsCustomStyle.onchange = function(element) {
    let value = this.checked

    browser.storage.sync.set({'desactivateGhostsCustomStyle': value}, function() {
        
    })

    browser.tabs.query({
        active: true,
        currentWindow: true,
    }, function(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
            "desactivateGhostsCustomStyle": value
        })
    })
}