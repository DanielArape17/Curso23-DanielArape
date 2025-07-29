// Ejercicios de POE
// Realizar una calculadora que permita sumar, restar, multiplicar y dividir dos números ingresados por el usuario a través de un formulario.
// El formulario debe contar con un botón para limpiar sus campos.
// El resultado debe de desplegarse en un tercer input con propiedad readonly.
// Si el usuario intenta enviar el formulario sin ingresar los dos números, mostrar un mensaje de error (*) indicando que todos los campos son obligatorios.
// El estudiante tiene total libertad para definir como recolectará los datos que definan el tipo de operación a realizar.

// (*) Los mensajes de error se pueden mostrar con alert, pero el primero en mostrarlos en el DOM con createElement, le pone nombre al gatito por 3 días.

//Variables del DOM
const userForm = document.getElementById("calculatorForm");
const calculateInput = document.getElementById("calculateInput");
const btnCalculate = document.getElementById("btnCalculate");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");
const btnFive = document.getElementById("btnFive");
const btnSix = document.getElementById("btnSix");
const btnSeven = document.getElementById("btnSeven");
const btnEight = document.getElementById("btnEight");
const btnNine = document.getElementById("btnNine");
const btnZero = document.getElementById("btnZero");
const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnTimes = document.getElementById("btnTimes");
const btnDivided = document.getElementById("btnDivided");
const btnEquals = document.getElementById("btnEquals");
const btnPoint = document.getElementById("btnPoint");
const btnDelete = document.getElementById("btnDelete")
const btnAC = document.getElementById("btnAC")

//Variables JS
const symbols = ["+", "-", "*", "/"];

const evaluateBtnPress = () =>{
  let dontPress = false
  let calculateInputValue = calculateInput.value
  let lengthCalculateInputValue = calculateInputValue.length
  let lastCharacter = calculateInputValue.charAt(lengthCalculateInputValue - 1)

  symbols.forEach(symbol =>{
    if(symbol === lastCharacter){
      dontPress = true
    }
  })
  return dontPress
}

const canPressPoint = () => {
  const inputValue = calculateInput.value;
  
  if (inputValue === '') {
    return true; 
  }

  // Me faltaba la funcion del punto en la calculadora
  // Y viendo la clase de ayer pense que podia utilizar expresiones regulares
  const symbols = inputValue.split(/[\+\-\X\÷]/);
  const lastPart = symbols[symbols.length - 1];
    
    if (lastPart === '') {
    return false; 
  }
  
  return !lastPart.includes('.'); 
};

const btnPress = (event) =>{
  const btn = event.target;
  const buttonText = btn.textContent;

  if(!evaluateBtnPress()){
    calculateInput.value += buttonText;
  }
  if(evaluateBtnPress() && buttonText !== "X" && buttonText !== "+" && buttonText !== "-" && buttonText !== "÷"){
    calculateInput.value += buttonText;
  }

  if (buttonText === '.') {
    if (canPressPoint()) {
      if (calculateInput.value === '') {
        calculateInput.value = '0.';
      } else {
        calculateInput.value += '.';
      }
    }
    return; 
  }
}

btnOne.addEventListener("click", btnPress);
btnTwo.addEventListener("click", btnPress);
btnThree.addEventListener("click", btnPress);
btnFour.addEventListener("click", btnPress);
btnFive.addEventListener("click", btnPress);
btnSix.addEventListener("click", btnPress);
btnSeven.addEventListener("click", btnPress);
btnEight.addEventListener("click", btnPress);
btnNine.addEventListener("click", btnPress);
btnZero.addEventListener("click", btnPress);
btnPoint.addEventListener("click", btnPress)

btnPlus.addEventListener("click", btnPress);
btnMinus.addEventListener("click", btnPress);
btnTimes.addEventListener("click", btnPress);
btnDivided.addEventListener("click", btnPress);

btnDelete.addEventListener("click", () =>{
  const deleteLastCharacter = calculateInput.value;
  calculateInput.value = deleteLastCharacter.slice(0, -1);
});

btnAC.addEventListener("click", () =>{
  calculateInput.value = ""
})



userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const calculate = calculateInput.value;
  symbols.reverse()
  
  
  
  
  symbols.forEach((symbol) => {
    console.log(`symbol: ${symbol}`)
    if(calculate.includes(symbol)){
      calculateArray = calculate.split(symbol);
      console.log(`calculateArray: ${calculateArray}`)
      
      let numOne = Number(calculateArray[0]);
      let numTwo = Number(calculateArray[1]);
      let result;

      if(symbol === "+"){
        result = numOne + numTwo;
      }
      else if(symbol === "-"){
        result = numOne - numTwo;
      }
      else if(symbol === "X"){
        result = numOne * numTwo;
      }
      else if(symbol === "÷"){
        result = numOne / numTwo;
      }
      calculateInput.value = result;
      const newElement = document.createElement("p");
      const record =  `${numOne} ${symbol} ${numTwo} = ${result}`
      newElement.textContent = record;
      document.body.appendChild(newElement);
    }
  });
});