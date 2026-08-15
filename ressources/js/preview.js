var extApi = typeof browser !== 'undefined' ? browser : chrome;
document.querySelector('.preview').addEventListener('click', function () {
  extApi.tabs.create({
    url: 'ressources/preview/index.html',
  });
});

document.querySelector('.github').addEventListener('click', function () {
  extApi.tabs.create({
    url: 'https://github.com/basedpolymer/lichess_enhancement',
  });
});
