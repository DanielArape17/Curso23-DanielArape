/*
  2. Crea una función llamada calculadora que reciba dos números y un operador
  (suma, resta, multiplicación o división) y realice la operación correspondiente.
  - Si el operador no es válido, muestra un mensaje de error.
  Ejecutala 3 veces con diferentes números y operadores, debes realizar validaciones
*/

let num1 = Number(prompt('Ingresa un numero'))
let num2 = Number(prompt('Ingresa otro numero'))
let operador = Number(prompt('Escoge una opcion 1:Suma, 2:Resta, 3:Multiplicacion, 4:Division'))

function calculadora(numero1, numero2, operador) {
  if(operador === 1){
    console.log(numero1 + numero2)
  }
  else if(operador === 2){
    console.log(numero1 - numero2)
  }
  else if(operador === 3){
    console.log(numero1 * numero2)
  }
  else if(operador === 4 && numero2 !== 0){
    console.log(numero1 / numero2)
  }
  else{
    alert('Ingresaste valores invalidos')
  }
}

calculadora(num1, num2, operador)