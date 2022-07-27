const number = document.querySelectorAll(".buttons .numberButtons")
const displayAnswer = document.querySelector("#displayAnswer");
const displayCalc = document.querySelector("#displayCalc")
const operators = document.querySelectorAll(".buttons .operators")
const equal = document.querySelector("#equal");
const clearAC = document.querySelector("#clear")
const point = document.querySelector("#point");
const erase = document.querySelector("#backspace");

let calcValue = null;
let operand1 = 0;
let operand2 = null;
let sign = null;
let resetDisplay = false;
let equalCounter = 1;
let clear = false;

clearAC.addEventListener("click", () => {
    clear = true;
    clearAll();
})

number.forEach((value) => {
    value.addEventListener("click", getNumbers)
})

operators.forEach((value) => {
    value.addEventListener("click", getOperator);
})

equal.addEventListener("click", getEqual)

erase.addEventListener("click", getEraser)

point.addEventListener("click", getPoint)

function getNumbers(e) {
    clearAll();

    if((displayAnswer.textContent.slice(0,1) == "0" && displayAnswer.textContent.length == 1) || resetDisplay == true) {
        displayAnswer.textContent = "";
        resetDisplay = false;
    }

    displayAnswer.textContent += e.target.textContent;
}

function getOperator(e) {
    clear = false; 

    if (operand1 == 0 || equalCounter == 0) { 
        operand1 = displayAnswer.textContent;
        sign = e.target.textContent;
        displayCalc.textContent = `${operand1} ${sign}`;
        resetDisplay = true;
        equalCounter = 1;
    }

    else if (resetDisplay == true) {
        sign = e.target.textContent;
        displayCalc.textContent = `${operand1} ${sign}`;
    }

    else {
        operand2 = displayAnswer.textContent;
        operate(operand1, sign, operand2);
        operand1 = calcValue;
        displayAnswer.textContent = operand1;
        sign = e.target.textContent;
        displayCalc.textContent = `${operand1} ${sign}`;
        resetDisplay = true;
    }
}

function getEqual() {
    if (sign == null) {
        displayCalc.textContent = `${displayAnswer.textContent} =`;
        resetDisplay = true;
    }

    else if (equalCounter == 1) {
        operand2 = displayAnswer.textContent;
        displayCalc.textContent = `${operand1} ${sign} ${operand2} =`;
        operate(operand1, sign, operand2);
        displayAnswer.textContent = calcValue;   
        resetDisplay = true;     
        clear = true;
        equalCounter = 0;
    }

    else {
        operand1 = displayAnswer.textContent;
        operate(operand1, sign, operand2);
        displayAnswer.textContent = calcValue;
        displayCalc.textContent = `${operand1} ${sign} ${operand2} =`;
        resetDisplay = true;
        clear = true;
    }
}

function clearAll() {    
    if (clear) {
    displayCalc.textContent = "";
    displayAnswer.textContent = "0";
    calcValue = null;
    operand1 = 0;
    operand2 = null;
    sign = null;
    resetDisplay = false;
    equalCounter = 1;
    clear = false;  
    }
}

function getPoint() {
    clearAll();

    if(resetDisplay == true) {    
        displayAnswer.textContent = "";
        resetDisplay = false;
    }

    if (displayAnswer.textContent === "") {
        displayAnswer.textContent = "0"
    }
    
    if (!displayAnswer.textContent.includes('.')) {
        displayAnswer.textContent += '.'
    }    
}

function getEraser() {   
    let len = displayAnswer.textContent.length;

    if(!resetDisplay) {
        if (len > 1) {
        displayAnswer.textContent = displayAnswer.textContent.slice(0,len-1);
        } 

        else {
            displayAnswer.textContent = "0";
        }    
    }
}

function add(a,b) {    
    calcValue = `${Number(a)+Number(b)}`;   
}

function sub(a,b) {    
    calcValue = `${Number(a)-Number(b)}`; 
}

function mul(a,b) {
    calcValue = `${Number(a)*Number(b)}`; 
}

function div(a,b) {    
    calcValue = `${Number(a)/Number(b)}`;
}

function operate(a, operator, b) {
    switch (operator) {
    case "+": add(a,b); break;
    case "-": sub(a,b); break;
    case "x": mul(a,b); break;
    case "/": div(a,b); break;
    }
}