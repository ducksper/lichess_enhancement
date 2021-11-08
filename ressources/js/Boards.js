var Boards = {
    replaceBackgroundImage: function(board_url) {
        
    
        board = document.querySelectorAll('cg-board')
        
        for (var i = 0; i < board.length; i++) {
            board[i].style.backgroundImage = "url("+ board_url +")"
        }

        document.arrive('cg-board', function() {
            cg_board = document.querySelectorAll('cg-board')
            for (var i = 0; i < cg_board.length; i++) {
                cg_board[i].style.backgroundImage = "url("+ board_url +")"
            }
        })
    },

    greatReset: function() {
        
    
        board = document.querySelectorAll('cg-board')
    
        for (var i = 0; i < board.length; i++) {
            board[i].style.backgroundImage = null
        }
        document.unbindArrive('cg-board')
    },

    chooseStyleAndApply: function(style_id) {

        //style_name = this.fromIDtoNameStyle(style_id)
        style_name = style_id

        var board = chrome.runtime.getURL('ressources/boards/' + style_name + '.png')
        
        this.replaceBackgroundImage(board)
    }
}