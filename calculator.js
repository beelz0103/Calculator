const  display = document.querySelector(".display");
let calcValue = 0;
let displayCounter = 0;
let opCounter = 0;
let opVal = [0,0,0];
let a = opVal;


function populateDisplay() {
const getNum = document.querySelectorAll(".numberButtons button")
Array.from(getNum).forEach((val) => {
    val.addEventListener("click", () => {
        if (displayCounter == 0) {
        display.textContent = "";
        display.textContent += val.textContent;
        display.style.color = "Black";
        displayCounter++;
        }

        else {display.textContent += val.textContent;}
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

// function calculate() {
//     if (opCounter == 0) {
//         console.log(a);
//         a[0] = Number(display.textContent);
//         opCounter++;
//         display.textContent = `${a[0]}${a[1]}`;
//     }

//     else {
//         a[2] = Number(display.textContent);
//         console.log(a);
//         operate(a[0],a[1],a[2]);
//         a[0] = calcValue;
//         console.log(a);
//         display.textContent = "";
//     }
// }



function calculate(e) {
let sign = e.target.textContent;
console.log(a);    

if (a[1] === 0) {
a[1] = sign;
a[0] = display.textContent;
display.textContent = "";
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
    console.log(a);
}

}

//     if (counter == 0) {
//         a[0] = Number(display.textContent);
//         a[1] = "+";
//         counter += 1;
//         console.log(a);
//         display.textContent = "";
//         console.log(display);
//     }

//     else {
//         a[2] = Number(display.textContent);
//         console.log(a);
//         operate(a[0],a[1],a[2]);
//         a[0] = calcValue;
//         a[1] = "+";
//         display.textContent = "";
//     }
// }


// const clear = document.querySelector("#clear")
// clear.addEventListener("click", () => {
//     display.textContent = 0;
//     displayCounter = 0;
//     a = ["a",0,0];
//     counter = 0;
// })

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
display.style.color = "Red";

    if (display.textContent == "") {
        display.textContent = a[0];
        displayCounter = 0;
        a = [0,0,0];
    }

//     else if (a!="a") {
//         display.textContent = display.textContent;
//         displayCounter = 0;
//         a = [0,0,0];
//         counter = 0;
//     }

    else {
    a[2] = display.textContent;
    console.log(a[2]);
    operate(a[0],a[1],a[2]);

    display.textContent = calcValue;
    displayCounter = 0;
    a = [0,0,0];
    }


})