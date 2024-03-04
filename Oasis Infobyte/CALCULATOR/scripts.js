let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(operator) {
    if (operator === 'sqrt') {
        currentInput += 'Math.sqrt(';
    } else {
        currentInput += ' ' + operator + ' ';
    }
    updateDisplay();
}

function toggleSign() {
    currentInput = eval('-1 * ' + currentInput);
    updateDisplay();
}

function deleteLastCharacter() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculateResult() {
    try {
        currentInput = eval(currentInput);
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
    }
}

function updateDisplay() {
    display.value = currentInput;
}
