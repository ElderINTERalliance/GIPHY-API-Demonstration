
const apiKey = '';

const audio = new Audio('/sounds/xpError.mp3')

var screen = document.getElementById("screen");

document.getElementById("recycleBin").addEventListener('click', () => {
    var randomNumber = Math.floor(Math.random() * 12 + 1);

    var img = new Image();
    img.src = `/images/errors/0${randomNumber}.png`;
    img.classList.add('error');
    var pos = getRandomPosition(img.width, img.height);
    img.style.left = pos[0] + 'px';
    img.style.top = pos[1] + 'px';
    screen.appendChild(img);
    audio.play();
})

document.getElementById("ie").addEventListener('click', () => {
    getImg = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=cat&rating=g`)
        .then(res => res.json())
        .then(src => {
            var imgSrc = src.data.image_url;
            console.log(src.data);
            var img = new Image();
            img.src = imgSrc;
            img.classList.add('gif');
            var pos = getRandomPosition(src.data.image_width, src.data.image_height);
            img.style.left = pos[0] + 'px';
            img.style.top = pos[1] + 'px';
            screen.appendChild(img);
        })
})

function getRandomPosition(width, height) {
    console.log(width, height);
    var x = window.innerWidth - width;
    var y = window.innerHeight - height;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}