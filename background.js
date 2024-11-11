//Set up default values in storage during installation
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set(
    {
      pieces: 'neo',
      board: 'green',
      sounds: 'chessdotcomdefault',
      desactivateGhostsCustomStyle: false,
    },
    function () {}
  );
});

//METTRE A JOUR LES PIECES SI ACTION UTILISATEUR DANS HTML EXTENSION

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.sounds_init) {
    chrome.scripting.executeScript({
      target: { tabId: request.tab },
      world: 'MAIN',
      func: () => {
        (function () {
          this.window.site.sound.sounds.clear();
        })();
      },
    });
  }
});
//Block audio files from network
/*chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true};
    },
    {
        urls: ["https://lichess1.org/assets/_Iu1lae/sound/standard/*.ogg"]
    },
    ["blocking"]
);

Permissions:
        "<all_urls>",
        "webRequest",
        "webRequestBlocking"
*/
