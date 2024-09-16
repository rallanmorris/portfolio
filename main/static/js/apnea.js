let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let minute = 0o0;
let second = 0o0;
let count = 0o0;
let prInSeconds = 0;
//let timer = false;
let divTest = document.getElementById('testDiv');
let divTables = document.getElementById('tablesDiv');
//divTables.style.display = "none";


startBtn.addEventListener('click', function () {
    timer = true;
    stopWatch();
});

stopBtn.addEventListener('click', function () {
    timer = false;
    setPr();
});

resetBtn.addEventListener('click', function () {
    timer = false;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        let minString = minute;
        let secString = second;
        let countString = count;


        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}

function setPr() {
    prInSeconds = (minute * 60) + second;
    document.getElementById('pr').value = prInSeconds;
}

function resetPr() {
    document.getElementById('pr').value = 0;
}

//function setMax() {
//    divTest.style.display = "none";
//    divTables.style.display = "block";
//}