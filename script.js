const display = document.getElementById("display");
const outputBox = document.getElementById("outputBox");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
  outputBox.innerText = "Result will appear here";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Normal Arithmetic Calculator
function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
    outputBox.innerText = "Answer: " + result;
    console.log("Answer:", result);
  } catch {
    outputBox.innerText = "Error!";
  }
}

// Square
function square() {
  let num = parseFloat(display.value);
  if (!isNaN(num)) {
    let result = num * num;
    outputBox.innerText = `Square of ${num} = ${result}`;
    console.log("Square:", result);
  }
}

// Cube
function cube() {
  let num = parseFloat(display.value);
  if (!isNaN(num)) {
    let result = num * num * num;
    outputBox.innerText = `Cube of ${num} = ${result}`;
    console.log("Cube:", result);
  }
}

// Factorial
function factorialCalc(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorialCalc(n - 1);
}

function factorial() {
  let num = parseInt(display.value);
  if (!isNaN(num) && num >= 0) {
    let result = factorialCalc(num);
    outputBox.innerText = `Factorial of ${num} = ${result}`;
    console.log("Factorial:", result);
  } else {
    outputBox.innerText = "Enter a positive integer!";
  }
}

// Even/Odd Checker
function checkEvenOdd() {
  let num = parseInt(display.value);
  if (!isNaN(num)) {
    let result = num % 2 === 0 ? "Even" : "Odd";
    outputBox.innerText = `${num} is ${result}`;
    console.log("Even/Odd:", result);
  }
}
