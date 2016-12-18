document.getElementById('player').style.top = '50px';
document.getElementById('player').style.left = '50px';
document.getElementById('fire').style.top = '50px';
document.getElementById('fire').style.left = '50px';

document.body.onkeydown = function(e) {
    var pl = document.getElementById('player');
    var fr = document.getElementById('fire');

    var KEYCODE_LEFT = 37;
    var KEYCODE_RIGHT = 39;
    var KEYCODE_UP = 38;
    var KEYCODE_DOWN = 40;
    var KEYCODE_ENTER = 13;
    var KEYCODE_SPACE = 32;

    if (e.keyCode == KEYCODE_LEFT) {
        pl.style.left = (parseInt(pl.style.left) - 10) + 'px';
        fr.style.left = (parseInt(fr.style.left) - 10) + 'px';
        localStorage.setItem('lastMove', 'left');
    } else if (e.keyCode == KEYCODE_RIGHT) {
        pl.style.left = (parseInt(pl.style.left) + 10) + 'px';
        fr.style.left = (parseInt(fr.style.left) + 10) + 'px';
        localStorage.setItem('lastMove', 'right');
    } else if (e.keyCode == KEYCODE_UP) {
        pl.style.top = (parseInt(pl.style.top) - 10) + 'px';
        fr.style.top = (parseInt(fr.style.top) - 10) + 'px';
        localStorage.setItem('lastMove', 'top');
    } else if (e.keyCode == KEYCODE_DOWN) {
        pl.style.top = (parseInt(pl.style.top) + 10) + 'px';
        fr.style.top = (parseInt(fr.style.top) + 10) + 'px';
        localStorage.setItem('lastMove', 'down');
    } else if (e.keyCode == KEYCODE_ENTER || e.keyCode == KEYCODE_SPACE) {
        createFireEffect(pl, fr);
        fr.addEventListener('transitionend', function() {
            endFireAnimation(pl, fr);
        });
    }
}

function createFireEffect(pl, fr) {

    var lastMove = localStorage.getItem('lastMove');

    fr.classList.add('move');

    if (lastMove == 'left') {
        fr.style.left = document.documentElement.clientLeft + 'px';
    } else if (lastMove == 'right') {
        fr.style.left = document.documentElement.clientWidth - 10 + 'px';
    } else if (lastMove == 'top') {
        fr.style.top = document.documentElement.clientTop + 'px';
    } else if (lastMove == 'down') {
        fr.style.top = document.documentElement.clientHeight - 10 + 'px';
    }

}

function endFireAnimation(pl, fr) {
    fr.classList.remove('move');
    fr.style.left = (parseInt(pl.style.left) - 0) + 'px';
    fr.style.top = (parseInt(pl.style.top) - 0) + 'px';
}