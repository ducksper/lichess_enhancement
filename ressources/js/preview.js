document.querySelector('.preview').addEventListener('click', function () {
  chrome.tabs.create({
    url: 'ressources/preview/index.html',
  });
});

document.querySelector('.github').addEventListener('click', function () {
  chrome.tabs.create({
    url: 'https://github.com/basedpolymer/lichess_enhancement',
  });
});
