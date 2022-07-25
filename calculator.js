const  displayCalc = document.querySelector("#displayCalc");
const  displayAnswer = document.querySelector("#displayAnswer");
const numbers = document.querySelectorAll(".numberButtons");
const erase = document.querySelector("#backspace");
const operator = document.querySelectorAll(".operators");

let valueHolder = [0,0,0]
let signCounter = 0;
let displayCounter = 0;
let equalCounter = 0;
let equalCounter2 = 0;
let eraseCounter = 0;
let pointCounter = 0;
populateDisplay();

function populateDisplay() {
numbers.forEach((value)=>{
    value.addEventListener("click", getNumbers);
})
}

function getNumbers(e) {    
    if(displayAnswer.textContent.slice(0,1) == "0" && displayAnswer.textContent.slice(1,2) != ".") { 
    console.log("1")   
    displayAnswer.textContent = "";   
    eraseCounter = 1;
    pointCounter = 0;
    }
    
    if (displayCounter == 0) {
        console.log("2")  
        console.log(displayCounter);
        displayAnswer.textContent = "";
        displayAnswer.textContent += e.target.textContent;   
        displayCounter = 1;
        signCounter = 0;
        eraseCounter = 1;
        pointCounter = 0;
        console.log(displayCounter);
    }     

    else if (equalCounter2 == 1) {
        console.log("3")  
    clear();
    if(displayAnswer.textContent.slice(0,1) == "0" && displayAnswer.textContent.slice(1,2) != ".") {    
        displayAnswer.textContent = "";   
        eraseCounter = 1;  
        pointCounter = 0;  
    }
    displayAnswer.textContent += e.target.textContent;
    displayCounter = 1;
    equalCounter2 = 0;
    }

    else {
        console.log("4")  
        displayAnswer.textContent += e.target.textContent; 
        eraseCounter = 1;
        pointCounter = 0;
    }
}

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

erase.addEventListener("click", () => {
    if(eraseCounter == 1) {
    let len = displayAnswer.textContent.length;
    if (len > 1) {
    if(displayAnswer.textContent.slice(len-1,len) == ".") {
        point.disabled = false;
    }
    displayAnswer.textContent = displayAnswer.textContent.slice(0,len-1);
    } 



    else {
        displayAnswer.textContent = "0";
    }
    } 
})

operator.forEach((value) => {
    value.addEventListener("click", calculate)
})

function calculate(e) {
    eraseCounter = 0;
    pointCounter = 1;
    let sign = e.target.textContent;
    
    if (valueHolder[1] == 0 || equalCounter == 0) {    
    valueHolder[0] = displayAnswer.textContent;
    valueHolder[1] = sign;
    displayCalc.textContent = `${valueHolder[0]} ${valueHolder[1]}`;
    displayCounter = 0;
    signCounter = 1;
    equalCounter = 1;
    point.disabled = false;
    }
    
    else if (signCounter == 1)  {   
    valueHolder[1] = sign; 
    displayCalc.textContent = `${valueHolder[0]} ${valueHolder[1]}`
    }
    
    else { 
        valueHolder[2] = displayAnswer.textContent;     
        console.log(valueHolder);    
        operate(valueHolder[0], valueHolder[1], valueHolder[2]);
        valueHolder[1] = sign; 
        valueHolder[0] = calcValue;
        displayAnswer.textContent = calcValue;       
        displayCalc.textContent = `${valueHolder[0]} ${valueHolder[1]}`;
        displayCounter = 0;
        signCounter = 1;
        point.disabled = false;
    }    
}

const point = document.querySelector("#point");

point.addEventListener("click", () => {
    if (pointCounter == 1) {   
    console.log("1");     
    displayAnswer.textContent = "0.";
    equalCounter2 = 0;
    point.disabled = true;
    pointCounter = 0;
    eraseCounter = 1;
    displayCounter = 1;
    console.log(1);
    console.log(eraseCounter);
    }

    else { 
    displayAnswer.textContent += ".",
    point.disabled = true;
    pointCounter = 0;
    displayCounter = 1;
    }
})

function clear() {
    displayAnswer.textContent = "0";
    displayCalc.textContent = "";
    valueHolder = [0,0,0]
    signCounter = 0;
    displayCounter = 0; 
    equalCounter = 0;
    eraseCounter = 0;
    pointCounter = 0;
    point.disabled = false;
}

const clearAC = document.querySelector("#clear")

clearAC.addEventListener("click", clear);

const equal = document.querySelector("#equal");

equal.addEventListener("click", () => {
    eraseCounter = 0;
    pointCounter = 1;
    if (valueHolder[1] == 0) {
        valueHolder[0] = displayAnswer.textContent;
        valueHolder[0] = Number(valueHolder[0]);   
        valueHolder[0] = valueHolder[0].toString();                 
        displayCalc.textContent = `${valueHolder[0]} =`
        displayAnswer.textContent = `${valueHolder[0]}`
        displayCounter = 0;
        point.disabled = false;
    }

    else if (equalCounter == 1) {    
    valueHolder[2] = displayAnswer.textContent;
    displayCalc.textContent = `${valueHolder[0]} ${valueHolder[1]} ${valueHolder[2]} = `
    operate(valueHolder[0], valueHolder[1], valueHolder[2]);
    displayAnswer.textContent = calcValue;
    point.disabled = false;
    equalCounter = 0;
    equalCounter2 = 1;
    }

    else {
    valueHolder[0] = displayAnswer.textContent;
    displayCalc.textContent = `${valueHolder[0]} ${valueHolder[1]} ${valueHolder[2]} = `
    operate(valueHolder[0], valueHolder[1], valueHolder[2]);
    displayAnswer.textContent = calcValue;
    }
})