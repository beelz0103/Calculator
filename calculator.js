const  display = document.querySelector(".display");
let calcValue = 0;
z = 0;
x = 0;


function popDisplay() {
const getNum = document.querySelectorAll(".numberButtons button")
Array.from(getNum).forEach(function populateDisplay(val) {
    val.addEventListener("click", () => {
        if (z == 0) {
        display.textContent = "";
        display.textContent += val.textContent;
        z++;
        }
        
        else {display.textContent += val.textContent;}
    })
});
}

popDisplay();

function add(a,b) {
    console.log(a+b);   
    calcValue = a+b; 
}

function sub(a,b) {
    console.log(a-b);
    calcValue = a-b;    
}

function operate(a, operator, b) {
    switch (operator) {
    case 1: add(a,b); break;
    case 2: sub(a,b); break;
    }
}

let a = [0,0,0];

let counter = 0;
const add1 = document.querySelector("#add").addEventListener("click", ()=> {
    if (counter == 0) {
        a[0] = parseInt(display.textContent);
        a[1] = 1;
        counter += 1;
        console.log(a);
        display.textContent = "";
        console.log(display);  
    }

    else {
        a[2] = parseInt(display.textContent);
        console.log(a);
        operate(a[0],a[1],a[2]);
        a[0] = calcValue;
        a[1] = 1;
        display.textContent = "";
    }

    }
)

const equal = document.querySelector("#equal");
equal.addEventListener("click", () => {
    if (display.textContent == "") {
        display,textContent = a[0];
    }

    else {
    a[2] = parseInt(display.textContent);
    console.log(a[2]);
    operate(a[0],a[1],a[2]);
    console.log(a[1]);
    console.log(a[2]);
    console.log(a[0]);

    display.textContent = calcValue;
    z--;
    a = [0,0,0];
    counter = 0;
    }
})



