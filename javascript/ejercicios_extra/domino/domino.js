let cartas = [
  { arriba: 0, abajo: 0 },
  { arriba: 0, abajo: 1 },
  { arriba: 0, abajo: 2 },
  { arriba: 0, abajo: 3 },
  { arriba: 0, abajo: 4 },
  { arriba: 0, abajo: 5 },
  { arriba: 0, abajo: 6 },
  { arriba: 1, abajo: 1 },
  { arriba: 1, abajo: 2 },
  { arriba: 1, abajo: 3 },
  { arriba: 1, abajo: 4 },
  { arriba: 1, abajo: 5 },
  { arriba: 1, abajo: 6 },
  { arriba: 2, abajo: 2 },
  { arriba: 2, abajo: 3 },
  { arriba: 2, abajo: 4 },
  { arriba: 2, abajo: 5 },
  { arriba: 2, abajo: 6 },
  { arriba: 3, abajo: 3 },
  { arriba: 3, abajo: 4 },
  { arriba: 3, abajo: 5 },
  { arriba: 3, abajo: 6 },
  { arriba: 4, abajo: 4 },
  { arriba: 4, abajo: 5 },
  { arriba: 4, abajo: 6 },
  { arriba: 5, abajo: 5 },
  { arriba: 5, abajo: 6 },
  { arriba: 6, abajo: 6 },
];

let jugador1,
  jugador2,
  jugador3,
  jugador4 = [];
let turno = 1;
let tablero = {arriba: 0, abajo: 0, historial: []};

function repartirCartas() {
  // Esto lo que hace es ir colocando las cartas en un orden aleatorio
  /*
    Ejemplo de cómo funciona:
    Si tenemos un array de cartas y lo queremos mezclar, podemos usar
    una función de orden aleatorio. La función sort() con una función
    que devuelve un número aleatorio entre -0.5 y 0.5, lo que
    permite que los elementos del array se reordenen de manera aleatoria.
    Esto es útil para barajar un mazo de cartas antes de repartirlas.
  */
  let barajaMezclada = cartas.sort(() => Math.random() - 0.5);
  jugador1 = barajaMezclada.slice(0, 7);
  jugador2 = barajaMezclada.slice(7, 14);
  jugador3 = barajaMezclada.slice(14, 21);
  jugador4 = barajaMezclada.slice(21, 28);
}

//Esta funcion me sirve para identificar al jugador que inicia el juego, es decir
// el que tiene el doble 6s.
function elegirSalida() {
  // Creo un array con los jugadores
  let jugadores = [jugador1, jugador2, jugador3, jugador4];
  // Recorro la mano de cada jugador
  for (let i = 0; i < jugadores.length; i++) {
    //Reviso cada carta de la mano del jugador
    for (let carta of jugadores[i]) {
      // Si la carta tiene arriba y abajo 6, entonces es el jugador que inicia
      if (carta.arriba === 6 && carta.abajo === 6) {
        // Guardo que valor puede ser jugado en la parte de arriba
        tablero.arriba = carta.arriba;
        // Guardo que valor puede ser jugado en la parte de abajo
        tablero.abajo = carta.abajo;
        // Agrego la carta al historial del tablero, ademas de guardar quien jugo este turno
        tablero.historial.push({ carta: carta, jugador: i + 1});
        //El primer jugador ya jugo, por lo que el turno pasa al siguiente jugador
        // Si el jugador que inicio es el 1, entonces el turno pasa al 2
        // Si el jugador que inicio es el 2, entonces el turno pasa al 3
        // Si el jugador que inicio es el 3, entonces el turno pasa al 4
        // Si el jugador que inicio es el 4, entonces el turno pasa al 1
        if(i < 3) {
          turno = i + 2;
        } else {
          turno = 1;
        }
      }
    }
  }
}
