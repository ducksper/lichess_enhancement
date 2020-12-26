var piece_select = document.getElementById('pieces_select')

//UPDATE <OPTION> WITH VALUE IN STORAGE
chrome.storage.sync.get('pieces', function(data) {
    
    piece_select.selectedIndex = data['pieces']

    console.log(data['pieces'] + ' value from storage set for HTMLselect pieces')
})

//UPDATE STORAGE WITH NEW VALUE AND SEND A SIGNAL TO MAIN SCRIPT
piece_select.onchange = function(element) {
    let value = this.selectedIndex

    chrome.storage.sync.set({'pieces': value}, function() {
        console.log('New value for pieces request by user: ' + value)
    })

    //Note: sending of pieces_init is useless for main script
    chrome.tabs.query({
        active: true,
        currentWindow: true,
    }, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            "pieces_init": value
        })
    })
}