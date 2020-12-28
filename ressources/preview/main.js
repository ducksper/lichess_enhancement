memes = ['1789.jpg', 'arrogant.jpg', 'averagelichesser.png', 'chess24.jpg', 'kruger.png', 'magnus.png', 'oldmemories.jpg', 'queensgambit.png', 'simp.png', 'supremacy.png', 'Troie.jpg', 'trump.jpg', 'hot.jpg', ]

lugar_img = document.getElementById('img-meme')
lugar_img.onclick = function() {
    chosenOne = Math.floor(Math.random() * 13)
    document.getElementById('button-meme').remove()

    var img_url = document.createElement("img");
    img_url.src = "../meme/" + memes[chosenOne]
    img_url.style = 'border: 3px solid black;border-radius:6px;max-width:550px;max-width:300px'
    lugar_img.appendChild(img_url)
}