
const  displayCalc = document.querySelector("#displayCalc");
const  displayAnswer = document.querySelector("#displayAnswer");

let calcValue = 0;
let displayCounter = 0;
let opCounter = 0;
let opVal = [0,0,0];
let a = opVal;
let equalCounter = 0;
let signCounter = 0;


function populateDisplay() {
const getNum = document.querySelectorAll(".numberButtons")
Array.from(getNum).forEach((val) => {
    val.addEventListener("click", () => {
        if (equalCounter!=0) {
            clear();

            displayAnswer.textContent = "";
    
            displayAnswer.textContent += val.textContent;

            displayCounter++;
            signCounter = 1;
        }

        else if (displayCounter == 0) {

        displayAnswer.textContent = "";

        displayAnswer.textContent += val.textContent;

        displayCounter++;
        signCounter = 1;
        }

        else {

        displayAnswer.textContent += val.textContent;
        signCounter = 1;        
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
a[0] = displayAnswer.textContent;
displayCounter--;
displayCalc.textContent = `${a[0]}${a[1]}`
console.log(a);
signCounter = 0;
}

else if (signCounter == 0)  {   
    a[1] = sign;
    console.log(a);
    displayCalc.textContent = `${a[0]}${a[1]}`
}

else { 
    a[2] = displayAnswer.textContent;         
    operate(a[0],a[1],a[2]);
    a[1] = sign; 
    a[0] = calcValue;
    displayAnswer.textContent = calcValue; 
    displayCounter--; 
    displayCalc.textContent = `${a[0]}${a[1]}`
    console.log(a);
    signCounter = 0;
}

}


function clear() {
    displayAnswer.textContent = "";
    displayCalc.textContent = "";
    displayCounter = 0;
    a = [0,0,0];
    equalCounter = 0;
}

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {




    if (equalCounter == 0) { 

   
    a[2] = displayAnswer.textContent;
    displayCalc.textContent = `${a[0]} ${a[1]} ${a[2]}`
    operate(a[0],a[1],a[2]);

    displayAnswer.textContent = calcValue;
    console.log(a);
    equalCounter++ 

    }
    
    else {
    a[0] = displayAnswer.textContent;
    displayCalc.textContent = `${a[0]}${a[1]}${a[2]}`
    operate(a[0],a[1],a[2]);
    displayAnswer.textContent = calcValue;
    }


})

document.querySelector("#clear").addEventListener("click", clear);