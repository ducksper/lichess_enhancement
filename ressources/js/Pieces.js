//PIECES ARE STYLED WITH A SINGLE STYLESHEET: THE RULES AUTOMATICALLY COVER PIECES
//CREATED LATER (MOVES, NEW GAMES, SPA NAVIGATION), SO NO DOM OBSERVATION IS NEEDED

const PIECE_NAMES = { p: 'pawn', r: 'rook', n: 'knight', b: 'bishop', q: 'queen', k: 'king' };

const Pieces = {
  sheet() {
    let style = document.getElementById('lichess-enhancement-pieces');
    if (!style) {
      style = document.createElement('style');
      style.id = 'lichess-enhancement-pieces';
      (document.head || document.documentElement).appendChild(style);
    }
    return style;
  },

  chooseStyleAndApply(styleName) {
    const ext = styleName === 'random' ? '.gif' : '.png';
    const rules = [];
    [
      ['w', 'white'],
      ['b', 'black'],
    ].forEach(([letter, color]) => {
      Object.keys(PIECE_NAMES).forEach((piece) => {
        const url = chrome.runtime.getURL(
          `ressources/pieces/${styleName}/${letter}${piece}${ext}`
        );
        //!important so the rule beats lichess's own piece styles everywhere
        rules.push(
          `piece.${color}.${PIECE_NAMES[piece]} { background-image: url("${url}") !important; }`
        );
      });
    });
    this.sheet().textContent = rules.join('\n');
  },

  greatReset() {
    const style = document.getElementById('lichess-enhancement-pieces');
    if (style) style.remove();
  },
};
