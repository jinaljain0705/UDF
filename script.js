const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let expr = display.value;
  let parts = [];
  let number = "";

  for (let i = 0; i < expr.length; i++) {
    let ch = expr[i];
    if ((ch >= "0" && ch <= "9") || ch === ".") {
      number += ch;
    } else {
      if (number !== "") {
        parts[parts.length] = parseFloat(number);
        number = "";
      }
      parts[parts.length] = ch;
    }
  }
  if (number !== "") {
    parts[parts.length] = parseFloat(number);
  }

  for (let i = 0; i < parts.length; i++) {
    if (parts[i] === "*" || parts[i] === "/" || parts[i] === "%") {
      let left = parts[i - 1];
      let right = parts[i + 1];
      let result = 0;

      if (parts[i] === "*") result = left * right;
      if (parts[i] === "/") result = right !== 0 ? left / right : "Error";
      if (parts[i] === "%") result = left % right;

      let newArr = [];
      for (let j = 0; j < i - 1; j++) newArr[newArr.length] = parts[j];
      newArr[newArr.length] = result;
      for (let j = i + 2; j < parts.length; j++)
        newArr[newArr.length] = parts[j];
      parts = newArr;
      i = -1;
    }
  }

  let result = parts[0];
  for (let i = 1; i < parts.length; i += 2) {
    let op = parts[i];
    let num = parts[i + 1];
    if (op === "+") result = result + num;
    if (op === "-") result = result - num;
  }

  display.value = result;
}
