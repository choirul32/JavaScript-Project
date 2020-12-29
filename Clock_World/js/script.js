var clock = document.getElementById('clock');
var greeting = document.getElementById('greeting');

var showCurrentTime = function(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    changeGreeting(hours);

    var clockTime = hours + ':' + minutes + ':' +seconds;
    clock.innerText = clockTime;
}

function changeGreeting(hour){
    var night = true;
    console.log(hour);
    if(hour > 0 && hour < 12 && night == true){
        greeting.innerText = "GOOD MORNING";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        night = false;
    }if(hour > 12 && hour < 23 && night == false){
        greeting.innerText = "GOOD NIGHT";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        night = true;
    }
    
}

var oneSecond = 1000;
setInterval(showCurrentTime, oneSecond);


