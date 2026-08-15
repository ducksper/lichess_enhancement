var extApi = typeof browser !== 'undefined' ? browser : chrome;

//Firefox MV3 treats host_permissions as opt-in: nothing works until the user grants them.
//Chrome grants them at install, so the banner never shows there.
var LICHESS_ORIGINS = { origins: ['*://*.lichess.org/*', '*://*.lichess1.org/*'] };

var permissions_banner = document.getElementById('permissions_banner');
var grant_button = document.getElementById('grant_permissions');

extApi.permissions
  .contains(LICHESS_ORIGINS)
  .then(function (granted) {
    if (!granted) {
      permissions_banner.style.display = 'block';
    }
  })
  .catch(function () {});

grant_button.addEventListener('click', function () {
  extApi.permissions
    .request(LICHESS_ORIGINS)
    .then(function (granted) {
      if (granted) {
        permissions_banner.style.display = 'none';
      }
    })
    .catch(function () {});
});
