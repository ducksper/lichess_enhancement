//THE BOARD TEXTURE LIVES ON cg-board::before IN LICHESS'S CSS; A STYLESHEET RULE
//COVERS BOARDS CREATED LATER TOO, SO NO DOM OBSERVATION IS NEEDED

var extApi = typeof browser !== 'undefined' ? browser : chrome;

var Boards = {
  sheet: function () {
    let style = document.getElementById('lichess-enhancement-board');
    if (!style) {
      style = document.createElement('style');
      style.id = 'lichess-enhancement-board';
      (document.head || document.documentElement).appendChild(style);
    }
    return style;
  },

  chooseStyleAndApply: function (styleName) {
    const url = extApi.runtime.getURL(`ressources/boards/${styleName}.webp`);
    //!important so the rule survives conflicts with other lichess-theming extensions
    this.sheet().textContent = `#main-wrap cg-board::before { background-image: url("${url}") !important; }`;
  },

  //Removing the sheet restores lichess's own board (never write background-image: none,
  //that would blank the board since lichess draws it on this same pseudo-element)
  greatReset: function () {
    const style = document.getElementById('lichess-enhancement-board');
    if (style) style.remove();
  },
};
