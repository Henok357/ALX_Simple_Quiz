// Step 1: Select the elements
const number1Input = document.getElementById('number1');
const number2Input = document.getElementById('number2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultDisplay = document.getElementById('calculation-result');


function add() {
    const num1 = parseFloat(number1Input.value) || 0; 
    const num2 = parseFloat(number2Input.value) || 0; 
    const result = num1 + num2;
    resultDisplay.textContent = result;
}

function subtract() {
    const num1 = parseFloat(number1Input.value) || 0; 
    const num2 = parseFloat(number2Input.value) || 0; 
    const result = num1 - num2;
    resultDisplay.textContent = result;
}

function multiply() {
    const num1 = parseFloat(number1Input.value) || 0; 
    const num2 = parseFloat(number2Input.value) || 0; 
    const result = num1 * num2;
    resultDisplay.textContent = result;
}

function divide() {
    const num1 = parseFloat(number1Input.value) || 0; 
    const num2 = parseFloat(number2Input.value) || 0; 
    
    if (num2 === 0) {
        resultDisplay.textContent = "Cannot divide by zero";
    } else {
        const result = num1 / num2;
        resultDisplay.textContent = result;
    }
}

addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);
