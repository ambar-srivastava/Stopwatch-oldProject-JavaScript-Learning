var second = document.querySelector('#second');
var firstBtn = document.querySelector('#firstBtn');
var secondBtn = document.querySelector('#secondBtn');
var minute = document.querySelector('#minute');
var hours = document.querySelector('#hours');

var sec = 0;

var min = 0;

var hour = 0;

firstBtn.addEventListener('click', function () {
    timer = setInterval(function () {
        if (sec < 59) {
            second.textContent = ++sec;
        }
        else {
            sec = 0;
            second.textContent = sec;
        }
        if (sec === 0) {
            // min++
            minute.textContent = ++min;
        }
        if (min === 60) {
            min = 0;
            minute.textContent = min;
            hour++;
            hours.textContent = hour;
        };
        console.log('**********')
        console.log(min)
        console.log(sec)
        console.log(hour)

    }, 1000);
});


secondBtn.addEventListener('click', function () {
    clearInterval(timer);
})