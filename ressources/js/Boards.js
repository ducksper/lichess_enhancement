// Function to add or remove a background image using a dedicated stylesheet
function addExtensionCssRule(selector, properties) {
  // Create or find the <style> element
  let style = document.getElementById('extension-custom-styles');
  if (!style) {
    style = document.createElement('style');
    style.id = 'extension-custom-styles';
    document.head.appendChild(style);
  }

  // Clear previous rules
  style.innerHTML = '';

  // Convert properties object to a CSS string
  const cssString = Object.entries(properties)
    .map(([prop, value]) => {
      return `${prop}: ${value};`;
    })
    .join(' ');

  // Create the full CSS rule
  const rule = `${selector} { ${cssString} }`;

  // Append or replace the rule
  style.appendChild(document.createTextNode(rule));
}

var Boards = {
  replaceBackgroundImage: function (board_url) {
    addExtensionCssRule('#main-wrap cg-board::before', {
      'background-image': `url("${board_url}")`,
    });

    document.arrive('cg-board', function () {
      addExtensionCssRule('#main-wrap cg-board::before', {
        'background-image': `url("${board_url}")`,
      });
    });
  },

  greatReset: function () {
    addExtensionCssRule('#main-wrap cg-board::before', {
      'background-image': 'none',
    });
    document.unbindArrive('cg-board');
  },

  chooseStyleAndApply: function (style_id) {
    //style_name = this.fromIDtoNameStyle(style_id)
    style_name = style_id;

    var board = chrome.runtime.getURL(
      'ressources/boards/' + style_name + '.png'
    );

    this.replaceBackgroundImage(board);
  },
};
