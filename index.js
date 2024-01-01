let timerId = document.getElementById('clock'); // переменная, которая будет хранить ID таймера
console.log(timerId);

let timer = false


const startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
    if(!timer) {
        timer = true
    }else return
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
    timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду

    
});


const stopButton = document.getElementById('stop')
stopButton.addEventListener('click', function () {

    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
    clearInterval(timerId); // останавливаем таймер
    timer = false
});


function updateClock() {
    const clock = document.getElementById('clock');
    // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
    const now = new Date();
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    clock.textContent = hours + ':' + minutes + ':' + seconds;
}
