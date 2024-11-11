const Pieces = {
  setPieceImages(selector, url) {
    const pieces = document.querySelectorAll(selector);
    pieces.forEach((piece) => (piece.style.backgroundImage = `url(${url})`));
  },

  clearPieceImages(selector) {
    const pieces = document.querySelectorAll(selector);
    pieces.forEach((piece) => (piece.style.backgroundImage = null));
  },

  getUrls(style) {
    const base = style === 'random' ? '.gif' : '.png';
    const path = `ressources/pieces/${style}/`;
    const pieces = ['r', 'n', 'b', 'q', 'k', 'p'];
    const colors = ['b', 'w'];

    const urls = {};
    colors.forEach((color) => {
      pieces.forEach((piece) => {
        urls[`${color}${piece}`] = chrome.runtime.getURL(
          path + color + piece + base
        );
      });
    });
    return urls;
  },

  replaceBackgroundImage(urls) {
    ['b', 'w'].forEach((color) => {
      ['r', 'n', 'b', 'q', 'k', 'p'].forEach((piece) => {
        this.setPieceImages(
          `piece.${color === 'b' ? 'black' : 'white'}.${
            piece === 'r'
              ? 'rook'
              : piece === 'n'
              ? 'knight'
              : piece === 'b'
              ? 'bishop'
              : piece === 'q'
              ? 'queen'
              : piece === 'k'
              ? 'king'
              : 'pawn'
          }`,
          urls[`${color}${piece}`]
        );
      });
    });
  },

  refresh(urls) {
    ['b', 'w'].forEach((color) => {
      ['r', 'n', 'b', 'q', 'k', 'p'].forEach((piece) => {
        const selector = `piece.${color === 'b' ? 'black' : 'white'}.${
          piece === 'r'
            ? 'rook'
            : piece === 'n'
            ? 'knight'
            : piece === 'b'
            ? 'bishop'
            : piece === 'q'
            ? 'queen'
            : piece === 'k'
            ? 'king'
            : 'pawn'
        }`;
        document.arrive(selector, () => {
          this.setPieceImages(selector, urls[`${color}${piece}`]);
        });
      });
    });
  },

  greatReset() {
    ['black', 'white'].forEach((color) => {
      ['rook', 'knight', 'bishop', 'queen', 'king', 'pawn'].forEach((piece) => {
        this.clearPieceImages(`piece.${color}.${piece}`);
      });
    });
  },

  chooseStyleAndApply(style) {
    const urls = this.getUrls(style);
    this.replaceBackgroundImage(urls);
    this.refresh(urls);
  },

  unbindPieces() {
    ['black', 'white'].forEach((color) => {
      ['pawn', 'bishop', 'knight', 'king', 'queen', 'rook'].forEach((piece) => {
        document.unbindArrive(`piece.${color}.${piece}`);
      });
    });
  },
};
