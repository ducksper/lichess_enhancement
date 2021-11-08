var piece_select = document.getElementById('pieces_select')

//UPDATE <OPTION> WITH VALUE IN STORAGE
browser.storage.sync.get('pieces', function(data) {
    
    piece_select.value = data['pieces']

    
})

//UPDATE STORAGE WITH NEW VALUE AND SEND A SIGNAL TO MAIN SCRIPT
piece_select.onchange = function(element) {
    let value = this.value

    browser.storage.sync.set({'pieces': value}, function() {
        
    })

    //Note: sending of pieces_init is useless for main script
    browser.tabs.query({
        active: true,
        currentWindow: true,
    }, function(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
            "pieces_init": value
        })
    })
}