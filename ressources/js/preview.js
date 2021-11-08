document.querySelector('.preview').addEventListener('click', function() {
    browser.tabs.create({
        url: 'ressources/preview/index.html'
    })
}, false)

document.querySelector('.github').addEventListener('click', function() {
    browser.tabs.create({
        url: 'https://github.com/ducksper/lichess_enhancement'
    })
}, false)