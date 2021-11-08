var Pieces = {
    replaceBackgroundImage: function(b_rook_url, b_knight_url, b_bishop_url, b_queen_url, b_king_url, b_pawn_url, w_rook_url, w_knight_url, w_bishop_url, w_queen_url, w_king_url, w_pawn_url) {
        
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
        
    },

    chooseStyleAndApply: function(style_id) {
        //style_name = this.fromIDtoNameStyle(style_id)
        style_name = style_id

        switch (style_name) {
            case 'pony':
                var b_rook_url = browser.runtime.getURL('ressources/pieces/pony/br.png')
                var b_knight_url = browser.runtime.getURL('ressources/pieces/pony/bn.png')
                var b_bishop_url = browser.runtime.getURL('ressources/pieces/pony/bb.png')
                var b_queen_url = browser.runtime.getURL('ressources/pieces/pony/bq.gif')
                var b_king_url = browser.runtime.getURL('ressources/pieces/pony/bk.png')
                var b_pawn_url = browser.runtime.getURL('ressources/pieces/pony/bp.png')
                
                var w_rook_url = browser.runtime.getURL('ressources/pieces/pony/wr.png')
                var w_knight_url = browser.runtime.getURL('ressources/pieces/pony/wn.png')
                var w_bishop_url = browser.runtime.getURL('ressources/pieces/pony/wb.png')
                var w_queen_url = browser.runtime.getURL('ressources/pieces/pony/wq.gif')
                var w_king_url = browser.runtime.getURL('ressources/pieces/pony/wk.png')
                var w_pawn_url = browser.runtime.getURL('ressources/pieces/pony/wp.png')
                break;
            
            case 'random':
                var b_rook_url = browser.runtime.getURL('ressources/pieces/random/br.gif')
                var b_knight_url = browser.runtime.getURL('ressources/pieces/random/bn.gif')
                var b_bishop_url = browser.runtime.getURL('ressources/pieces/random/bb.gif')
                var b_queen_url = browser.runtime.getURL('ressources/pieces/random/bq.gif')
                var b_king_url = browser.runtime.getURL('ressources/pieces/random/bk.gif')
                var b_pawn_url = browser.runtime.getURL('ressources/pieces/random/bp.gif')
                
                var w_rook_url = browser.runtime.getURL('ressources/pieces/random/wr.gif')
                var w_knight_url = browser.runtime.getURL('ressources/pieces/random/wn.gif')
                var w_bishop_url = browser.runtime.getURL('ressources/pieces/random/wb.gif')
                var w_queen_url = browser.runtime.getURL('ressources/pieces/random/wq.gif')
                var w_king_url = browser.runtime.getURL('ressources/pieces/random/wk.gif')
                var w_pawn_url = browser.runtime.getURL('ressources/pieces/random/wp.gif')
                break;
        
            default:
                var b_rook_url = browser.runtime.getURL('ressources/pieces/' + style_name + '/br.png')
                var b_knight_url = browser.runtime.getURL('ressources/pieces/' + style_name + '/bn.png')
                var b_bishop_url = browser.runtime.getURL('ressources/pieces/' + style_name + '/bb.png')
                var b_queen_url = browser.runtime.getURL('ressources/pieces/' + style_name + '/bq.png')
                var b_king_url = browser.runtime.getURL('ressources/pieces/' + style_name + '/bk.png')
                var b_pawn_url = browser.runtime.getURL('ressources/pieces/' + style_name + '/bp.png')
                
                var w_rook_url = browser.runtime.getURL('ressources/pieces/' + style_name + '/wr.png')
                var w_knight_url = browser.runtime.getURL('ressources/pieces/' + style_name + '/wn.png')
                var w_bishop_url = browser.runtime.getURL('ressources/pieces/' + style_name + '/wb.png')
                var w_queen_url = browser.runtime.getURL('ressources/pieces/' + style_name + '/wq.png')
                var w_king_url = browser.runtime.getURL('ressources/pieces/' + style_name + '/wk.png')
                var w_pawn_url = browser.runtime.getURL('ressources/pieces/' + style_name + '/wp.png')
                break;
        }
        
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