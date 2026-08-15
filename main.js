//APPLY THE SAVED PIECES AND BOARD STYLES

function applyFromStorage() {
  chrome.storage.sync.get(['pieces', 'board'], function (data) {
    if (data.pieces && data.pieces !== 'none_pieces') {
      Pieces.chooseStyleAndApply(data.pieces);
    } else {
      Pieces.greatReset();
    }
    if (data.board && data.board !== 'none_board') {
      Boards.chooseStyleAndApply(data.board);
    } else {
      Boards.greatReset();
    }
  });
}

applyFromStorage();

//RE-APPLY WHEN THE USER PICKS A NEW STYLE IN THE POPUP

chrome.runtime.onMessage.addListener(function (request) {
  if (request && (request.pieces_init || request.board_init)) {
    applyFromStorage();
  }
});

//ASK THE BACKGROUND TO PRE-DECODE THE REPLACED SOUNDS IN LICHESS'S SOUND CACHE,
//OTHERWISE THE FIRST CHECK/CHECKMATE OF A GAME PLAYS LATE (issue #15)

if (window.top === window) {
  chrome.storage.sync.get('sounds', function (data) {
    if (data.sounds && data.sounds !== 'none') {
      chrome.runtime.sendMessage({ sound_warmup: true });
    }
  });
}
