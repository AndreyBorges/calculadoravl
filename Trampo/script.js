const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const display = document.querySelector(".display");
const result = document.querySelector(".result");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const isOn = document.querySelector(".is-on");
const values = [];
let operator = "";
let currentResult = 0;

// * FUNÇÕES AUXILIARES
const addClick = (element, func) => {
  element.addEventListener("click", func);
};

const removeClick = (element, func) => {
  element.removeEventListener("click", func);
};

// * FUNÇÃO DE NUMEROS
// APLICADO O CONCEITO DE DESESTRUTURAÇÃO DE OBJETOS.
const handleClickNumber = ({ target }) => {
  //!TODO: LIDAR COM NÚMEROS
  switch (display.innerText) {
    case "0":
      display.innerText = target.innerText;
      break;
    case "+":
      display.innerText = target.innerText;
      break;
    case "-":
      display.innerText = target.innerText;
      break;
    case "*":
      display.innerText = target.innerText;
      break;
    case "/":
      display.innerText = target.innerText;
      break;
    default:
      display.innerText += target.innerText;
      break;
  }
};

// * FUNÇÃO DE OPERADORES
// APLICADO O CONCEITO DE DESESTRUTURAÇÃO DE OBJETOS.
const handleClickOperator = ({ target }) => {
  if (target.innerText === "+") {
    values.push(+display.innerText);
    display.innerText = target.innerText;

    if (values.length === 2) {
      currentResult = values.reduce(
        (prevValue, currValue) => prevValue + currValue
      );
      values.length = 0;
      display.innerText = currentResult;
      values.push(currentResult);
    }
    operator = target.innerText;
  }

  if (target.innerText === "-") {
    values.push(+display.innerText);
    display.innerText = target.innerText;
    if (values.length === 2) {
      currentResult = values.reduce(
        (prevValue, currValue) => prevValue - currValue
      );
      values.length = 0;
      display.innerText = currentResult;
      values.push(currentResult);
    }
    operator = target.innerText;
  }

  if (target.innerText === "*") {
    values.push(+display.innerText);
    display.innerText = target.innerText;
    if (values.length === 2) {
      currentResult = values.reduce(
        (prevValue, currValue) => prevValue * currValue
      );
      values.length = 0;
      display.innerText = currentResult;
      values.push(currentResult);
    }
    operator = target.innerText;
  }

  if (target.innerText === "/") {
    values.push(+display.innerText);
    display.innerText = target.innerText;
    if (values.length === 2) {
      currentResult = values.reduce(
        (prevValue, currValue) => prevValue / currValue
      );
      values.length = 0;
      display.innerText = currentResult;
      values.push(currentResult);
    }
    operator = target.innerText;
  }
};

// * FUNÇÃO DE RESULTADO
// APLICADO O CONCEITO DE DESESTRUTURAÇÃO DE OBJETOS.
const handleResult = (event) => {
  switch (operator) {
    case "+":
      values.push(+display.innerText);
      if (values.length === 2) {
        currentResult = values.reduce(
          (prevValue, currValue) => prevValue + currValue
        );
        values.length = 0;
        display.innerText = currentResult;
        values.push(currentResult);
      }
      break;
    case "-":
      values.push(+display.innerText);
      if (values.length === 2) {
        currentResult = values.reduce(
          (prevValue, currValue) => prevValue - currValue
        );
        values.length = 0;
        display.innerText = currentResult;
        values.push(currentResult);
      }
      break;
    case "*":
      values.push(+display.innerText);
      if (values.length === 2) {
        currentResult = values.reduce(
          (prevValue, currValue) => prevValue * currValue
        );
        values.length = 0;
        display.innerText = currentResult;
        values.push(currentResult);
      }
      break;
    case "/":
      values.push(+display.innerText);
      if (values.length === 2) {
        currentResult = values.reduce(
          (prevValue, currValue) => prevValue / currValue
        );
        values.length = 0;
        display.innerText = currentResult;
        values.push(currentResult);
      }
      break;
  }
};

// * FUNÇÃO DO PONTO
// APLICADO O CONCEITO DE DESESTRUTURAÇÃO DE OBJETOS.
const handleDot = ({ target }) => {
  display.innerText += target.innerText;
  currentValue = display.innerText;
};
// * FUNÇÃO DO CLEAR
// APLICADO O CONCEITO DE DESESTRUTURAÇÃO DE OBJETOS.
const handleClear = () => {
  // !TODO: LIDAR COM AC
  values.length = 0;
  display.innerText = 0;
  currentResult = 0;
};

// * FUNÇÃO DO DEL
// APLICADO O CONCEITO DE DESESTRUTURAÇÃO DE OBJETOS.
const handleDel = () => {
  display.innerText = display.innerText.substring(
    0,
    display.innerText.length - 1
  );

  if (display.innerText === "") display.innerText = 0;
};

// * FUNÇÃO ON/OFF
// APLICADO O CONCEITO DE DESESTRUTURAÇÃO DE OBJETOS.
const handleIsOn = ({ target }) => {
  target.innerText = target.innerText === "on" ? "off" : "on";
  target.classList.toggle("change-mode");

  if (target.innerText === "on") {
    numbers.forEach((number) => addClick(number, handleClickNumber));
    operators.forEach((operator) => addClick(operator, handleClickOperator));
    addClick(result, handleResult);
    addClick(dot, handleDot);
    addClick(clear, handleClear);
    addClick(del, handleDel);
    display.innerText = "0";
  } else {
    numbers.forEach((number) => removeClick(number, handleClickNumber));
    operators.forEach((operator) => removeClick(operator, handleClickOperator));
    removeClick(result, handleResult);
    removeClick(dot, handleDot);
    removeClick(clear, handleClear);
    removeClick(del, handleDel);
    display.innerText = " ";
    values.length = 0;
  }
};

addClick(isOn, handleIsOn);
