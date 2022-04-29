let result = document.querySelector(".result")
let number = document.querySelector(".number")
let operator = document.querySelector(".operator")
let calcBtn = document.querySelector(".calcbtn")

calcBtn.addEventListener("click", () =>{

    if (operator.value == "weight") {
    result.textContent = number.value * 1000 + "gram";
    }
    if (operator.value == "distance") {
    result.textContent = number.value * 100 + "meter";
    }
    if (operator.value == "currency") {
    result.textContent = number.value * 500 + "naira";
    }
    if (operator.value == "meter") {
    result.textContent = number.value  *  100 + "centimeter";
    }
    if (operator.value == "kilometer") {
    result.textContent = number.value  * 1000  + "meter";
    }
    if (operator.value == "millimeter") {
    result.textContent = number.value  * 1000  + "micrometer";
    }
    if (operator.value == "gram") {
    result.textContent = number.value  * 1000  + "kilogram";
    }
    if (operator.value == "foot") {
    result.textContent = number.value  * 12 + "inch";
    }
    if (operator.value == "mile") {
    result.textContent = number.value  * 1760  + "yard";
    }
    if (operator.value == "temperature") {
    result.textContent = ((number.value -32) * 5) / 9 + "degree";
    }
    if (operator.value == "degree") {
    result.textContent = number.value  * 33.8 + "degree fahreheit";
    }
    if (operator.value == "latitude") {
    result.textContent = number.value  * 111 + "kilometer";
    }
    if (operator.value == "decimeter") {
    result.textContent = number.value  * 1.4 + "sun radius";
    }
    if (operator.value == "decimeter") {
    result.textContent = number.value  * 3.937 + "inches";
    }
     
    
})

