var Pieces = {
    replaceBackgroundImage: function(b_rook_url, b_knight_url, b_bishop_url, b_queen_url, b_king_url, b_pawn_url, w_rook_url, w_knight_url, w_bishop_url, w_queen_url, w_king_url, w_pawn_url) {
        console.log('Replacing pieces')
        b_rook = document.querySelectorAll('piece.black.rook')
        b_knight = document.querySelectorAll('piece.black.knight')
        b_bishop = document.querySelectorAll('piece.black.bishop')
        b_queen = document.querySelectorAll('piece.black.queen')
        b_king = document.querySelectorAll('piece.black.king')
        b_pawn = document.querySelectorAll('piece.black.pawn')
        
        for (var i = 0; i < b_rook.length; i++) {
            b_rook[i].style.backgroundImage = "url("+ b_rook_url +")"
        }
        
        for (var i = 0; i < b_knight.length; i++) {
            b_knight[i].style.backgroundImage = "url("+ b_knight_url +")"
        }
        
        for (var i = 0; i < b_bishop.length; i++) {
            b_bishop[i].style.backgroundImage = "url("+ b_bishop_url +")"
        }
        
        for (var i = 0; i < b_queen.length; i++) {
            b_queen[i].style.backgroundImage = "url("+ b_queen_url +")"
        }
        
        for (var i = 0; i < b_king.length; i++) {
            b_king[i].style.backgroundImage = "url("+ b_king_url +")"
        }
        
        for (var i = 0; i < b_pawn.length; i++) {
            b_pawn[i].style.backgroundImage = "url("+ b_pawn_url +")"
        }
        
        w_rook = document.querySelectorAll('piece.white.rook')
        w_knight = document.querySelectorAll('piece.white.knight')
        w_bishop = document.querySelectorAll('piece.white.bishop')
        w_queen = document.querySelectorAll('piece.white.queen')
        w_king = document.querySelectorAll('piece.white.king')
        w_pawn = document.querySelectorAll('piece.white.pawn')
        
        for (var i = 0; i < w_rook.length; i++) {
            w_rook[i].style.backgroundImage = "url("+ w_rook_url +")"
        }
        
        for (var i = 0; i < w_knight.length; i++) {
            w_knight[i].style.backgroundImage = "url("+ w_knight_url +")"
        }
        
        for (var i = 0; i < w_bishop.length; i++) {
            w_bishop[i].style.backgroundImage = "url("+ w_bishop_url +")"
        }
        
        for (var i = 0; i < w_queen.length; i++) {
            w_queen[i].style.backgroundImage = "url("+ w_queen_url +")"
        }
        
        for (var i = 0; i < w_king.length; i++) {
            w_king[i].style.backgroundImage = "url("+ w_king_url +")"
        }
        
        for (var i = 0; i < w_pawn.length; i++) {
            w_pawn[i].style.backgroundImage = "url("+ w_pawn_url +")"
        }
    },

    refresh: function(b_rook_url, b_knight_url, b_bishop_url, b_queen_url, b_king_url, b_pawn_url, w_rook_url, w_knight_url, w_bishop_url, w_queen_url, w_king_url, w_pawn_url) {
        
        console.log('Watching for changes in pieces')
        
        //BLACK
        document.arrive('piece.black.pawn', function() {
            b_pawn = document.querySelectorAll('piece.black.pawn')
            for (var i = 0; i < b_pawn.length; i++) {
                b_pawn[i].style.backgroundImage = "url("+ b_pawn_url +")"
            }
        })
        document.arrive('piece.black.king', function() {
            b_king = document.querySelectorAll('piece.black.king')
            for (var i = 0; i < b_king.length; i++) {
                b_king[i].style.backgroundImage = "url("+ b_king_url +")"
            }
        })
        document.arrive('piece.black.queen', function() {
            b_queen = document.querySelectorAll('piece.black.queen')
            for (var i = 0; i < b_queen.length; i++) {
                b_queen[i].style.backgroundImage = "url("+ b_queen_url +")"
            }
        })
        document.arrive('piece.black.bishop', function() {
            b_bishop = document.querySelectorAll('piece.black.bishop')
            for (var i = 0; i < b_bishop.length; i++) {
                b_bishop[i].style.backgroundImage = "url("+ b_bishop_url +")"
            }
        })
        document.arrive('piece.black.knight', function() {
            b_knight = document.querySelectorAll('piece.black.knight')
            for (var i = 0; i < b_knight.length; i++) {
                b_knight[i].style.backgroundImage = "url("+ b_knight_url +")"
            }
        })
        document.arrive('piece.black.rook', function() {
            b_rook = document.querySelectorAll('piece.black.rook')
            for (var i = 0; i < b_rook.length; i++) {
                b_rook[i].style.backgroundImage = "url("+ b_rook_url +")"
            }
        })
        
        //WHITE
        document.arrive('piece.white.knight', function() {
            w_knight = document.querySelectorAll('piece.white.knight')
            for (var i = 0; i < w_knight.length; i++) {
                w_knight[i].style.backgroundImage = "url("+ w_knight_url +")"
            }
        })
        document.arrive('piece.white.rook', function() {
            w_rook = document.querySelectorAll('piece.white.rook')
            for (var i = 0; i < w_rook.length; i++) {
                w_rook[i].style.backgroundImage = "url("+ w_rook_url +")"
            }
        })
        document.arrive('piece.white.queen', function() {
            w_queen = document.querySelectorAll('piece.white.queen')
            for (var i = 0; i < w_queen.length; i++) {
                w_queen[i].style.backgroundImage = "url("+ w_queen_url +")"
            }
        })
        document.arrive('piece.white.king', function() {
            w_king = document.querySelectorAll('piece.white.king')
            for (var i = 0; i < w_king.length; i++) {
                w_king[i].style.backgroundImage = "url("+ w_king_url +")"
            }
        })
        document.arrive('piece.white.bishop', function() {
            w_bishop = document.querySelectorAll('piece.white.bishop')
            for (var i = 0; i < w_bishop.length; i++) {
                w_bishop[i].style.backgroundImage = "url("+ w_bishop_url +")"
            }
        })
        document.arrive('piece.white.pawn', function() {
            w_pawn = document.querySelectorAll('piece.white.pawn')
            for (var i = 0; i < w_pawn.length; i++) {
                w_pawn[i].style.backgroundImage = "url("+ w_pawn_url +")"
            }
        })
    },

    greatReset: function() {
        console.log('Request reset pieces to Lichess default params')
        b_rook = document.querySelectorAll('piece.black.rook')
        b_knight = document.querySelectorAll('piece.black.knight')
        b_bishop = document.querySelectorAll('piece.black.bishop')
        b_queen = document.querySelectorAll('piece.black.queen')
        b_king = document.querySelectorAll('piece.black.king')
        b_pawn = document.querySelectorAll('piece.black.pawn')
        
        for (var i = 0; i < b_rook.length; i++) {
            b_rook[i].style.backgroundImage = null
        }
        
        for (var i = 0; i < b_knight.length; i++) {
            b_knight[i].style.backgroundImage = null
        }
        
        for (var i = 0; i < b_bishop.length; i++) {
            b_bishop[i].style.backgroundImage = null
        }
        
        for (var i = 0; i < b_queen.length; i++) {
            b_queen[i].style.backgroundImage = null
        }
        
        for (var i = 0; i < b_king.length; i++) {
            b_king[i].style.backgroundImage = null
        }
        
        for (var i = 0; i < b_pawn.length; i++) {
            b_pawn[i].style.backgroundImage = null
        }
        
        w_rook = document.querySelectorAll('piece.white.rook')
        w_knight = document.querySelectorAll('piece.white.knight')
        w_bishop = document.querySelectorAll('piece.white.bishop')
        w_queen = document.querySelectorAll('piece.white.queen')
        w_king = document.querySelectorAll('piece.white.king')
        w_pawn = document.querySelectorAll('piece.white.pawn')
        
        for (var i = 0; i < w_rook.length; i++) {
            w_rook[i].style.backgroundImage = null
        }
        
        for (var i = 0; i < w_knight.length; i++) {
            w_knight[i].style.backgroundImage = null
        }
        
        for (var i = 0; i < w_bishop.length; i++) {
            w_bishop[i].style.backgroundImage = null
        }
        
        for (var i = 0; i < w_queen.length; i++) {
            w_queen[i].style.backgroundImage = null
        }
        
        for (var i = 0; i < w_king.length; i++) {
            w_king[i].style.backgroundImage = null
        }
        
        for (var i = 0; i < w_pawn.length; i++) {
            w_pawn[i].style.backgroundImage = null
        }
        console.log('Reset pieces to Lichess default params: success')
    },

    fromIDtoNameStyle: function(style_id) {
        switch (style_id) {
            case 1:
                return '8_bit'
            case 2:
                return 'alpha'
            case 3:
                return 'bases'
            case 4:
                return 'book'
            case 5:
                return 'bubblegum'
            case 6:
                return 'cases'
            case 7:
                return 'classic'
            case 8:
                return 'club'
            case 9:
                return 'condal'
            case 10:
                return 'dash'
            case 11:
                return 'game_room'
            case 12:
                return 'glass'
            case 13:
                return 'gothic'
            case 14:
                return 'graffiti'
            case 15:
                return 'icy_sea'
            case 16:
                return 'light'
            case 17:
                return 'lolz'
            case 18:
                return 'marble'
            case 19:
                return 'maya'
            case 20:
                return 'metal'
            case 21:
                return 'modern'
            case 22:
                return 'nature'
            case 23:
                return 'neon'
            case 24:
                return 'neo'
            case 25:
                return 'neo_wood'
            case 26:
                return 'newspaper'
            case 27:
                return 'ocean'
            case 28:
                return 'sky'
            case 29:
                return 'space'
            case 30:
                return 'tigers'
            case 31:
                return 'tournament'
            case 32:
                return 'vintage'
            case 33:
                return 'wood'
            case 34:
                return '3d_wood'
            case 35:
                return '3d_staunton'
            case 36:
                return '3d_plastic'
            case 37:
                return '3d_chesskid'
        }
    },

    chooseStyleAndApply: function(style_id) {
        //style_name = this.fromIDtoNameStyle(style_id)
        style_name = style_id
        
        var b_rook_url = chrome.runtime.getURL('ressources/pieces/' + style_name + '/br.png')
        var b_knight_url = chrome.runtime.getURL('ressources/pieces/' + style_name + '/bn.png')
        var b_bishop_url = chrome.runtime.getURL('ressources/pieces/' + style_name + '/bb.png')
        var b_queen_url = chrome.runtime.getURL('ressources/pieces/' + style_name + '/bq.png')
        var b_king_url = chrome.runtime.getURL('ressources/pieces/' + style_name + '/bk.png')
        var b_pawn_url = chrome.runtime.getURL('ressources/pieces/' + style_name + '/bp.png')
        
        var w_rook_url = chrome.runtime.getURL('ressources/pieces/' + style_name + '/wr.png')
        var w_knight_url = chrome.runtime.getURL('ressources/pieces/' + style_name + '/wn.png')
        var w_bishop_url = chrome.runtime.getURL('ressources/pieces/' + style_name + '/wb.png')
        var w_queen_url = chrome.runtime.getURL('ressources/pieces/' + style_name + '/wq.png')
        var w_king_url = chrome.runtime.getURL('ressources/pieces/' + style_name + '/wk.png')
        var w_pawn_url = chrome.runtime.getURL('ressources/pieces/' + style_name + '/wp.png')

        this.replaceBackgroundImage(b_rook_url, b_knight_url, b_bishop_url, b_queen_url, b_king_url, b_pawn_url, w_rook_url, w_knight_url, w_bishop_url, w_queen_url, w_king_url, w_pawn_url)

        this.refresh(b_rook_url, b_knight_url, b_bishop_url, b_queen_url, b_king_url, b_pawn_url, w_rook_url, w_knight_url, w_bishop_url, w_queen_url, w_king_url, w_pawn_url)
    },

    unbindPieces: function() {
        document.unbindArrive('piece.black.pawn')
        document.unbindArrive('piece.black.bishop')
        document.unbindArrive('piece.black.knight')
        document.unbindArrive('piece.black.king')
        document.unbindArrive('piece.black.queen')
        document.unbindArrive('piece.black.rook')
    
        document.unbindArrive('piece.white.pawn')
        document.unbindArrive('piece.white.bishop')
        document.unbindArrive('piece.white.knight')
        document.unbindArrive('piece.white.king')
        document.unbindArrive('piece.white.queen')
        document.unbindArrive('piece.white.rook')
    }
}