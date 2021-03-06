
const apiKey = '';

const audio = new Audio('/sounds/xpError.mp3')

var screen = document.getElementById("screen");

document.getElementById("recycleBin").addEventListener('click', () => {
    var randomNumber = Math.floor(Math.random() * 12 + 1);
    appendError(`/images/errors/0${randomNumber}.png`)
    audio.play();
})

// Put your code here

function appendGif(src, width, height) {
    var img = new Image();
    img.src = src;
    img.classList.add('error');
    var pos = getRandomPosition(width, height);
    img.style.left = pos[0] + 'px';
    img.style.top = pos[1] + 'px';
    screen.appendChild(img);
}

function appendError(src) {
    var img = new Image();
    img.addEventListener('load', () => {
        var pos = getRandomPosition(img.width, img.height);
        img.style.left = pos[0] + 'px';
        img.style.top = pos[1] + 'px';
    })
    img.src = src;
    img.classList.add('error');
    screen.appendChild(img);
}

function getRandomPosition(width, height) {
    var x = window.innerWidth - width;
    var y = window.innerHeight - height;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);
    return [randomX, randomY];
}