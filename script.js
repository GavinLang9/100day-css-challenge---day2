var topLine = document.getElementsByClassName("line1")[0];
var middleLine = document.getElementsByClassName('line2')[0];
var bottomLine = document.getElementsByClassName('line3')[0];

var box = document.getElementsByClassName('box')[0];

topLine.classList.remove('animation');
middleLine.classList.remove('animation');
bottomLine.classList.remove('animation');

box.addEventListener('click', turnOnAnimation);

// when box is clicked, the reverse animation can occur
// before, when the screen loaded, the reverse screen animation played automatically
function turnOnAnimation() {
    topLine.classList.add('animation');
    middleLine.classList.add('animation');
    bottomLine.classList.add('animation');
}

