let [seconds, minutes, hours] = [0, 0, 0];
let interval = null;
let time = document.getElementById("time");
let startClock = document.querySelector("#start");
let stopClock = document.querySelector("#stop");
let resetClock = document.querySelector("#reset");

startClock.onclick = () => {
    start();
}

stopClock.onclick = () => {   
    stop();
}

resetClock.onclick = () => {
    reset();
}

function stopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    time.innerHTML = `${h}:${m}:${s}`;
}

function start() {
    if (interval != null) {
        clearInterval(interval);
    }
    interval = setInterval(stopwatch, 1000);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    seconds = 0;  
    minutes = 0;
    hours = 0;
    time.innerHTML = "00:00:00";
}
