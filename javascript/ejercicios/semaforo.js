/*
1. Crea una función llamada semaforo que reciba un número del 1 al 3 y muestre un mensaje según el semáforo:
  - 1: "Rojo, detente"
  - 2: "Amarillo, precaución"
  - 3: "Verde, avanza"

  Ejecutala 3 veces con diferentes números, debes realizar validaciones para que al
  enviar un numero fuera del rango 1-3, se muestre un mensaje de error.
*/

let numero = parseInt(prompt("Ingrese un número del 1 al 3 para el semáforo"));

function semaforo(numero) {
    
  if (numero < 1 || numero > 3) {
    console.log("Número no válido. Debe ser entre 1 y 3.");
  } else if (numero === 1) {
    console.log("Rojo, detente");
  } else if (numero === 2) {
    console.log("Amarillo, precaución");
  } else if (numero === 3) {
    console.log("Verde, avanza");
  }
}

console.log(semaforo(numero)); // Llamada a la función con el número ingresado