var board_select = document.getElementById('board_select')

//UPDATE <OPTION> WITH VALUE IN STORAGE
browser.storage.sync.get('board', function(data) {

    board_select.value = data['board']

    
})

//UPDATE STORAGE WITH NEW VALUE AND SEND A SIGNAL TO MAIN SCRIPT
board_select.onchange = function(element) {
    let value = this.value

    browser.storage.sync.set({'board': value}, function() {
        
    })

    //Note: sending of pieces_init is useless for main script
    browser.tabs.query({
        active: true,
        currentWindow: true,
    }, function(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
            "board_init": value
        })
    })
}