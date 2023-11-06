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

let timesArr = [];

const handleStart = () => {

    clearInterval(countTime);

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

const handleStop = () => {

    time.innerHTML = `Latest time: ${stopwatch.textContent}`;

    if (stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        timesArr.push(stopwatch.textContent);
    }

    clearStuff();

}

const handlePause = () => {

    clearInterval(countTime);

}

const handleReset = () => {

    time.style.visibility = 'hidden';
    clearStuff();
    timesArr = [];

}

const clearStuff = () => {

    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;

}

const showHistory = () => {

    // Firstly reset archive
    timeList.textcontent = '';
    let num = 1;

    timesArr.forEach(time => {

        const newTime = document.createElement('li');
        newTime.innerHTML = `time measurement ${num}: <span>${time}</span>`
        timeList.appendChild(newTime);
        num++;

    });

}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', showHistory);