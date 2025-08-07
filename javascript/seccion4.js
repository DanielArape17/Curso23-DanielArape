/*
  Asincronismo
  No es más que la capacidad de un programa para ejecutar tareas en paralelo sin bloquear el 
  hilo principal de ejecución.
*/

/*
  Functiones asincronas
  setInterval
  setInterval es una función que ejecuta un bloque de código repetidamente con un intervalo de tiempo especificado.
  Se utiliza para realizar tareas periódicas, como actualizaciones de interfaz de usuario o comprobaciones
*/

setInterval(() => {
  console.log('Hola, soy un setInterval');
}, 1000); // Ejecuta cada segundo

console.log('Este mensaje se muestra inmediatamente, sin esperar al setInterval');


/*
  setTimeout
  setTimeout es una función que ejecuta un bloque de código una sola vez después de un intervalo de tiempo especificado.
  Se utiliza para retrasar la ejecución de una tarea, como mostrar un mensaje después de un tiempo determinado.
*/

setTimeout(() => {
  console.log('Hola, soy un setTimeout');
}, 2000); // Ejecuta después de 2 segundos

console.log('Este mensaje se muestra inmediatamente, sin esperar al setTimeout');

/*
  Async/Await
  Async/Await es una forma de manejar operaciones asincrónicas en JavaScript de manera más legible y estructurada.
*/
async function saludar(nombre) {
  let hola = "hola";
  await console.log(`Hola, ${nombre}`);
  alert(hola);
}

/*
  Promesas
  Las promesas son objetos que representan el resultado de una operación asincrónica.
  Pueden estar en uno de los siguientes estados: pendiente, cumplida o rechazada.
*/

async function promesaEjemplo() {
  await new Promise((resolve, reject) => { // Crea una nueva promesa
    setTimeout(() => { // Resuelve la promesa después de 3 segundos
      resolve('Promesa resuelta después de 3 segundos');
      // reject('Error al resolver la promesa'); // Puedes descomentar esta línea para simular un error
    }, 3000); // Resuelve la promesa después de 3 segundos
  });
}

function mostrarMensaje(mensaje) {
  console.log(mensaje);
}

promesaEjemplo().then(mostrarMensaje)


/*
  Fetch API
  La Fetch API es una interfaz moderna para realizar solicitudes HTTP en JavaScript.
  Permite obtener recursos de la red de manera sencilla y manejar respuestas asincrónicas.
*/

async function getData() {
  let informacion = null;
  // Fetch en este caso esta realizando una petición a la API de Rick and Morty
  await fetch('https://rickandmortyapi.com/api/character').then((data) => {
    //Fetch trae toda la información de la API, pero en formato de string, necesitamos convertirla a JSON
    data.json();
  }).then((data) => {
    // Aquí se asigna la información obtenida a la variable 'informacion'
    informacion = data;
    // Aquí puedes hacer algo con la información obtenida, como mostrarla en la consola
    console.log(informacion);
  }).catch((error) => {
    // Manejo de errores en caso de que la solicitud falle
    console.error('Error al obtener los datos:', error);
  });
}