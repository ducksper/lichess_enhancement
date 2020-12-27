var Boards = {
    replaceBackgroundImage: function(board_url) {
        console.log('Replacing board')
    
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
        console.log('Reset board to Lichess')
    
        board = document.querySelectorAll('cg-board')
    
        for (var i = 0; i < board.length; i++) {
            board[i].style.backgroundImage = null
        }
        document.unbindArrive('cg-board')
    },

    fromIDtoNameStyle: function(style_id) {
        switch (style_id) {
            case 1:
                return '8_bit'
            case 2:
                return 'bases'
            case 3:
                return 'blue'
            case 4:
                return 'brown'
            case 5:
                return 'bubblegum'
            case 6:
                return 'burled_wood'
            case 7:
                return 'dark_wood'
            case 8:
                return 'dash'
            case 9:
                return 'glass'
            case 10:
                return 'graffiti'
            case 11:
                return 'green'
            case 12:
                return 'icy_sea'
            case 13:
                return 'light'
            case 14:
                return 'lolz'
            case 15:
                return 'marble'
            case 16:
                return 'metal'
            case 17:
                return 'neon'
            case 18:
                return 'newpaper'
            case 19:
                return 'orange'
            case 20:
                return 'overlay'
            case 21:
                return 'parchment'
            case 22:
                return 'purple'
            case 23:
                return 'red'
            case 24:
                return 'sand'
            case 25:
                return 'sky'
            case 26:
                return 'stone'
            case 27:
                return 'tan'
            case 28:
                return 'tournament'
            case 29:
                return 'translucent'
            case 30:
                return 'walnut'
        }
    },

    chooseStyleAndApply: function(style_id) {

        //style_name = this.fromIDtoNameStyle(style_id)
        style_name = style_id

        var board = chrome.runtime.getURL('ressources/boards/' + style_name + '.png')
        
        this.replaceBackgroundImage(board)
    }
}