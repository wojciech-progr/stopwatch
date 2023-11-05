const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.info');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBin = document.querySelector('.close');

let countTime;
let minutes = 0;
let seconds = 0;

const handleStart = () => {

    countTime = setInterval(() => {

        if (seconds < 9) {
            // Add 1 second
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`;
        } else if (seconds >= 9 && seconds < 59) {
            // Add 10 seconds
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`;
        } else {
            // Add 1 minute
            minutes++;
            seconds = 0;
            stopwatch.textContent = `${minutes}:00`;
        }

    }, 100);

}

startBtn.addEventListener('click', handleStart);