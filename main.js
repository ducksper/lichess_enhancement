var styleConsoleLog = [
    "background-image: url(" + chrome.runtime.getURL('ressources/logo/lichess_chess_logo.png') + ")",
    "width: 300px",
    'height: 300px',
    'background-size: cover',
    'line-height: 50px'
]

/*
//LOGO
var lichess_chess_logo_url = chrome.runtime.getURL('ressources/logo/chesscom_logo_better.png')

site_title = document.querySelector('.site-title')//.remove()
document.querySelector('.site-title a').remove()
site_title_nav = document.querySelector('.site-title-nav')

var img_url = document.createElement("img");
var a_url= document.createElement("a");

img_url.src = lichess_chess_logo_url
img_url.width = 170
a_url.href = '/'

site_title.appendChild(a_url)
a_url.appendChild(img_url)
*/

//FONT
document.querySelector('html').style.fontfamily = '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif'

//GET PIECES FROM STORAGE
chrome.storage.sync.get('pieces', function(data) {
    
    
    if (data['pieces'] != 'none_pieces') {
        Pieces.chooseStyleAndApply(data['pieces'])
    }
})

//GET BOARD FROM STORAGE
chrome.storage.sync.get('board', function(data) {
    if (data['board'] != 'none_board') {
        Boards.chooseStyleAndApply(data['board'])
    }    
})

//METTRE A JOUR LES PIECES SI ACTION UTILISATEUR DANS HTML EXTENSION

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    chrome.storage.sync.get('pieces', function(data) {
        if (data['pieces'] == 'none_pieces') {
            Pieces.unbindPieces()
            Pieces.greatReset()
        } else {
            Pieces.chooseStyleAndApply(data['pieces'])
        }
    })
    
    var board_select = document.getElementById('board_select')
    
    chrome.storage.sync.get('board', function(data) {
        
        if (data['board'] == 'none_board') {
            Boards.greatReset()
        } else {
            Boards.chooseStyleAndApply(data['board']) 
        }
    })
})

/*function ghostActivateState() { 
    chrome.storage.sync.get('desactivateGhostsCustomStyle', function(data) {
        if (!data['desactivateGhostsCustomStyle']) {
            return false
        } else return true
    })
}*/

document.addEventListener('mousedown', function() {
    chrome.storage.sync.get('pieces', function(data) {
        if (data['pieces'] != 'none_pieces') {
            Pieces.chooseStyleAndApply(data['pieces'])
        }
    })
}, false)
