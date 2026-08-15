var board_select = document.getElementById('board_select');

//UPDATE <OPTION> WITH VALUE IN STORAGE
chrome.storage.sync.get('board', function (data) {
  if (data.board) {
    board_select.value = data.board;
  }
});

//UPDATE STORAGE WITH NEW VALUE AND SEND A SIGNAL TO MAIN SCRIPT
board_select.onchange = async function () {
  const value = this.value;
  try {
    await chrome.storage.sync.set({ board: value });

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && /^https?:\/\/([a-z0-9-]+\.)?lichess1?\.org\//.test(tab.url || '')) {
      chrome.tabs.sendMessage(tab.id, { board_init: value }).catch(function () {});
    }
  } catch (error) {
    console.error(error);
  }
};
