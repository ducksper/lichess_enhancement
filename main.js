//FONT
document.querySelector('html').style.fontfamily = '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif'

//GET PIECES FROM STORAGE
browser.storage.sync.get('pieces', function (data) {
    if (data['pieces'] != 'none_pieces') {
        Pieces.chooseStyleAndApply(data['pieces'])
    }
})

//GET BOARD FROM STORAGE
browser.storage.sync.get('board', function (data) {
    if (data['board'] != 'none_board') {
        Boards.chooseStyleAndApply(data['board'])
    }
})

//METTRE A JOUR LES PIECES SI ACTION UTILISATEUR DANS HTML EXTENSION

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    browser.storage.sync.get('pieces', function (data) {
        if (data['pieces'] == 'none_pieces') {
            Pieces.unbindPieces()
            Pieces.greatReset()
        } else {
            Pieces.chooseStyleAndApply(data['pieces'])
        }
    })

    var board_select = document.getElementById('board_select')

    browser.storage.sync.get('board', function (data) {

        if (data['board'] == 'none_board') {
            Boards.greatReset()
        } else {
            Boards.chooseStyleAndApply(data['board'])
        }
    })
})

/*function ghostActivateState() { 
    browser.storage.sync.get('desactivateGhostsCustomStyle', function(data) {
        if (!data['desactivateGhostsCustomStyle']) {
            return false
        } else return true
    })
}*/

document.addEventListener('mousedown', function () {
    browser.storage.sync.get('pieces', function (data) {
        if (data['pieces'] != 'none_pieces') {
            Pieces.chooseStyleAndApply(data['pieces'])
        }
    })
}, false)
