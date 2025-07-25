// Ejercicios de POE
// Realizar una calculadora que permita sumar, restar, multiplicar y dividir dos números ingresados por el usuario a través de un formulario.
// El formulario debe contar con un botón para limpiar sus campos.
// El resultado debe de desplegarse en un tercer input con propiedad readonly.
// Si el usuario intenta enviar el formulario sin ingresar los dos números, mostrar un mensaje de error (*) indicando que todos los campos son obligatorios.
// El estudiante tiene total libertad para definir como recolectará los datos que definan el tipo de operación a realizar.

// (*) Los mensajes de error se pueden mostrar con alert, pero el primero en mostrarlos en el DOM con createElement, le pone nombre al gatito por 3 días.

const userForm = document.getElementById("calculatorForm");
const calculateInput = document.getElementById("calculateInput");
const btnCalculate = document.getElementById("btnCalculate");
const btnOne = document.getElementById("btnOne")

btnOne.addEventListener("click", () =>{
  calculateInput.value += "1"
})

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const calculate = calculateInput.value; 
  const symbols = ["+", "-", "*", "/"];
  

  symbols.forEach((symbol) => {
    if(calculate.includes(symbol)){
      let calculateArray = calculate.split(symbol)
      let numOne = Number(calculateArray[0]);
      let numTwo = Number(calculateArray[1]);
      let result;

      if(symbol === "+"){
        result = numOne + numTwo
      }
      else if(symbol === "-"){
        result = numOne - numTwo
      }
      else if(symbol === "*"){
        result = numOne * numTwo
      }
      else if(symbol === "/"){
        result = numOne / numTwo
  }

      const newElement = document.createElement("p");
      newElement.textContent = result;
      document.body.appendChild(newElement);
    }
  });

  
});