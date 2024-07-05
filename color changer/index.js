const body = document.querySelector("body");
const buttons = document.querySelectorAll(".color-btn");
console.log(body)
console.log(buttons)

buttons.forEach(function(button) {
    button.addEventListener('click', function(event){
        console.log("Button clicked!");
        console.log(event.target.id)
        if(event.target.id === "purple"){
            body.style.backgroundColor = event.target.id;
        };
        if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id;
        };
        if(event.target.id === "red"){
            body.style.backgroundColor = event.target.id;
        };
        if(event.target.id === "green"){
            body.style.backgroundColor = event.target.id;
            
        };
        if(event.target.id === "yellow"){
            body.style.backgroundColor = event.target.id;
            const h1 = document.querySelector("h1")
            h1.style.color = "black";
        };
    });
});