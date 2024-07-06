const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]     
    }
    return color
}

const start = document.querySelector("#start");
const stopButton = document.querySelector("#stop")

let intervalId;
const startChangingColor = function (){
    const body = document.querySelector("body")
    if (!intervalId) {
        intervalId = setInterval(() => {
            body.style.backgroundColor = randomColor()
        }, 1000);
    }   
    
}
const stopChangingColor = function (){
    clearInterval(intervalId);
    intervalId = null
}
start.addEventListener("click", startChangingColor)
stopButton.addEventListener("click", stopChangingColor)
// stop.addEventListener("click", stopChangingColor)