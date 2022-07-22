const  display = document.querySelector(".display");
const  displayCalc = document.querySelector("#displayCalc");
const  displayAnswer = document.querySelector("#displayAnswer");

let calcValue = 0;
let displayCounter = 0;
let opCounter = 0;
let opVal = [0,0,0];
let a = opVal;
let equalCounter = 0;


function populateDisplay() {
const getNum = document.querySelectorAll(".numberButtons button")
Array.from(getNum).forEach((val) => {
    val.addEventListener("click", () => {
        if (equalCounter!=0) {
            clear();
            display.textContent = "";
            display.textContent += val.textContent;
            displayAnswer.textContent = "";
    
            displayAnswer.textContent += val.textContent;
            display.style.color = "Black";
            displayCounter++;
        }

        else if (displayCounter == 0) {
        display.textContent = "";
        display.textContent += val.textContent;
        displayAnswer.textContent = "";

        displayAnswer.textContent += val.textContent;
        display.style.color = "Black";
        displayCounter++;
        }

        else {
        display.textContent += val.textContent;
        displayAnswer.textContent += val.textContent;
        }
    })
});
}

populateDisplay();

function add(a,b) {    
    calcValue = `${Number(a)+Number(b)}`;
    console.log(calcValue);
}

function sub(a,b) {    
    calcValue = `${Number(a)-Number(b)}`;
    console.log(calcValue);
}

function mul(a,b) {
    calcValue = `${Number(a)*Number(b)}`;
    console.log(calcValue);
}

function div(a,b) {    
    calcValue = `${Number(a)/Number(b)}`;
    console.log(calcValue);
}

function operate(a, operator, b) {
    switch (operator) {
    case "+": add(a,b); break;
    case "-": sub(a,b); break;
    case "x": mul(a,b); break;
    case "/": div(a,b); break;
    }
}

const operator = document.querySelectorAll(".operators");
operator.forEach((value) => {
    value.addEventListener("click", calculate)
})

function calculate(e) {
let sign = e.target.textContent;
console.log(a);    

if (a[1] === 0 || equalCounter != 0) {
equalCounter = 0;
a[1] = sign;
a[0] = display.textContent;
display.textContent = "";
displayCounter--;
displayCalc.textContent = `${a[0]}${a[1]}`
console.log(a);
}

else if (display.textContent == "")  {   
    a[1] = sign;
    console.log(a);
}

else { 
    a[2] = display.textContent;         
    operate(a[0],a[1],a[2]);
    a[1] = sign; 
    a[0] = calcValue;
    display.textContent = ""; 
    displayAnswer.textContent = calcValue; 
    displayCounter--; 
    displayCalc.textContent = `${a[0]}${a[1]}`
    console.log(a);
}

}


function clear() {
    display.textContent = 0;
    displayAnswer.textContent = 0;
    displayCalc.textContent = 0;
    displayCounter = 0;
    a = [0,0,0];
    equalCounter = 0;
}

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
display.style.color = "Red";

    // if (display.textContent == "") {
    //     display.textContent = a[0];
    //     displayCounter = 0;
    //     a = [0,0,0];
    // }

//     else if (a!="a") {
//         display.textContent = display.textContent;
//         displayCounter = 0;
//         a = [0,0,0];
//         counter = 0;
//     }

    if (equalCounter == 0) { 

   
    a[2] = displayAnswer.textContent;
    displayCalc.textContent = `${a[0]}${a[1]}${a[2]}`
    operate(a[0],a[1],a[2]);

    display.textContent = calcValue;
    displayAnswer.textContent = calcValue;
    console.log(a);
    equalCounter++ 

    }
    
    else {
    a[0] = displayAnswer.textContent;
    displayCalc.textContent = `${a[0]}${a[1]}${a[2]}`
    operate(a[0],a[1],a[2]);
    display.textContent = calcValue;
    displayAnswer.textContent = calcValue;
    }


})