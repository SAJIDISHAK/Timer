var min = +prompt("How much minutes Counter??", 1);
var sec = 60;
var msec = 100;
min -= 1;

var minhead = document.getElementById("min")
var sechead = document.getElementById("sec")
var msechead = document.getElementById("msec")

minhead.innerHTML = min;

var interval;

function timer() {

    msec--;
    msechead.innerHTML = msec;
    if (msec <= 0) {
        sec--;
        sechead.innerHTML = sec;
        msec = 100;
    } else if (sec <= 0) {
        min--
        minhead.innerHTML = min;
        sec = 60;
    }

    // .........................
    if (min === 0 && sec === 0) {
        reset();
    }

    //..........................
    // else if (min < 0) {
    //     reset();
    // }

}

function start() {
    // Extra COde ...........................


    if (min <= 0 && sec <= 0) {
        alert('Please Enter time');
    }


    // ......................................
    else {
        interval = setInterval(timer, 10)
        disbtn.disabled = true;
        disbtn.style.opacity = "0.1";
    }

}


function pause() {
    clearInterval(interval);
    disbtn.disabled = false;
    disbtn.style.opacity = "1";

}

function reset() {
    clearInterval(interval)
    min = 00;
    sec = 00;
    mSec = 00;
    mSecHead.innerHTML = mSec;
    secHead.innerHTML = sec;
    minHead.innerHTML = min;
    disbtn.disabled = false;
    disbtn.style.opacity = "1";
}