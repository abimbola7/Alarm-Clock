let timer = "";
let hourss = "";
let minutess = "";
let mp3 = new Audio("audio/buzzer.mp3");
function playy() {
    mp3.play();
    // mp3.loop = true;
}

function pausee() {
    mp3.pause();
    mp3.currentTime = 0;
}

let timeSec = setInterval(function(){
    let date = new Date()
    clock.innerHTML = 
    `<span class="display-3">${date.getHours()} : </span> 
    <span class="display-3">${date.getMinutes().toString().length == 1 ? '0' + date.getMinutes() : date.getMinutes()}</span>
    <sub style="font-size: 20px;">${date.getSeconds().toString().length == 1 ? '0' + date.getSeconds() : date.getSeconds()}</sub>`
});

function setalarm() {
    let dates = new Date();
    hourss = hrs.value;
    minutess = mins.value;
    let currentHr = dates.getHours(); 
    let currentMin = dates.getMinutes();
    if (hourss == currentHr && minutess == currentMin) {
        playy()
        clearInterval(timer)
        hrs.value = "";
        mins.value = "";
        p.innerHTML = 
        `<div class="timer py-3 text-light">
            <p class="">Alarm at time ${hourss}:${minutess}</p>
            <p>${reminder.value}</p>
            <div>
                <button class="btn btn-danger btn-sm" onclick="stopalarm()">Stop Alarm</button>
            </div>
        </div>`;
        
    }
    
}

function display() {
    if (hrs.value >= 12) {
        p.innerHTML = `Alarm set successfully for ${hrs.value}:${mins.value} PM!`    
    } else if(hrs.value < 12){
        p.innerHTML = `Alarm set successfully for ${hrs.value}:${mins.value} AM!`
    }
    
}

function stopalarm() {
    pausee()
    p.innerHTML = "";
    hourss = "";
    minutess = "";
    if (hourss && minutess) {
        set()
    }
}

function set() {
    timer = setInterval(setalarm, 1000);    
}
