
const form = document.querySelector("form")

form.addEventListener("submit", function(event){
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value) ;
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if(height === "" || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter valid Height`
    }else if(weight === "" || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter valid Weight`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        
        if(bmi < 18.6){
            result.innerHTML = `Oops! you are under weight. Eat healthy. Your BMI Score is ${bmi}`;
            result.style.color = "red";
        }else if(bmi > 24.9){
            result.innerHTML = `Oops! you are over weight. Eat healthy. Your BMI Score is ${bmi}`;
            result.style.color = "red";
        }else{
            result.innerHTML = `Congrats! you are Normal. Eat healthy. Your BMI Score is ${bmi}`;
            result.style.color = "rgb(161, 241, 40)";
        }
    }

})
