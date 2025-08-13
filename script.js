// Get references to the display elements and buttons
const display = document.getElementById("display");

// Get references to the current and previous display elements
const currDisplay = document.querySelector(".curr-display");
const prevDisplay = document.querySelector(".prev-display");
const numbers = document.querySelectorAll(".number");
const operands = document.querySelectorAll(".operation");
const clearBtn = document.querySelector(".clear");
const delBtn = document.querySelector(".delete");
const equalBtn = document.querySelector(".equal");
let operation;

// Function to append a number to the current display
// Function to choose an operation and compute the result
// Function to clear the display
// Function to compute the result based on the chosen operation
function appendNumber(number) {
    if (number === "." && currDisplay.innerText.includes(".")) return;
    currDisplay.innerText += number;
}


function chooseOperation(operand) {
    if (currDisplay.innerText === "") return;
    compute(operand);
    operation = operand;
    currDisplay.innerText += operand;
    prevDisplay.innerText = currDisplay.innerText;
    currDisplay.innerText = "";
}

function clearDisplay() {
    currDisplay.innerText = "";
    prevDisplay.innerText = "";
}


function compute(operand) {
    let result;
    const previousValue = parseFloat(prevDisplay.innerText) ;
    const currentValue = parseFloat(currDisplay.innerText) ;

    if (isNaN(previousValue) || isNaN(currentValue)) return;

    switch (operation) {
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue;
            break;
        case "*":
            result = previousValue * currentValue;
            break;
        case "/":
            result = previousValue / currentValue;
            break;
        default:
            return;
    }
    currDisplay.innerText = result;
}

// Add event listeners to number buttons
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        appendNumber(number.innerText);
    });
});

operands.forEach((operand) => {
    operand.addEventListener("click", () => {
        chooseOperation(operand.innerText);
    });
});

clearBtn.addEventListener("click", () => {
    clearDisplay();
});

equalBtn.addEventListener("click", () => {
    compute();
    prevDisplay.innerText
});

delBtn.addEventListener("click", () => {
    currDisplay.innerText = currDisplay.innerText.slice(0, -1);
});


// Original code for a simple calculator functionality
function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteOneValue() {
    display.value = display.value.toString().slice(0,-1);
}

function calculate() {
    display.value = eval(display.value);
}

function calculate() {
    try {
        display.value = eval(display.value);
    }

    catch (error) {
        display.value = "Error";
    }
}


















/*const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteOneValue() {
    display.value = display.value.toString().slice(0,-1);
}

function calculate() {
    display.value = eval(display.value);
}

function calculate() {
    try {
        display.value = eval(display.value);
    }

    catch (error) {
        display.value = "Error";
    }
}*/
