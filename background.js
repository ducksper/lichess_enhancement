//Set up default values in storage during installation
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({
        'pieces': 'neo',
        'board': 'green',
        'desactivateGhostsCustomStyle': false
    }, function() {
        console.log('pieces: Neo \bboard: Green')
    })
})

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