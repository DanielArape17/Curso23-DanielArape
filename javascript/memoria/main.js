const cartas = [
  {
    id: 0,
    numero: 1,
    oculta: true,
    bloqueada: false
  },
  {
    id: 1,
    numero: 1,
    oculta: true,
    bloqueada: false
  },
  {
    id: 2,
    numero: 2,
    oculta: true,
    bloqueada: false
  },
  {
    id: 3,
    numero: 2,
    oculta: true,
    bloqueada: false
  },
  {
    id: 4,
    numero: 3,
    oculta: true,
    bloqueada: false
  },
  {
    id: 5,
    numero: 3,
    oculta: true,
    bloqueada: false
  }
];

const cartasVolteadas = [];

voltearCarta = (i) => {
  if(!cartas[i].bloqueada){
    cartas[i].oculta = cartas[i].oculta ? false : true;

    cartasVolteadas.push(cartas[i]);
    cartas[i].bloqueada = true;

    if(cartasVolteadas.length == 2){
      indexPrimeraCarta = cartasVolteadas[0].id;
      if(cartasVolteadas[0].numero !== cartasVolteadas[1].numero){
        cartas[i].oculta = true;
        cartas[indexPrimeraCarta].oculta = true;
        cartas[i].bloqueada = false;
        cartas[indexPrimeraCarta].bloqueada = false;  
      }
      cartasVolteadas.splice(0, 2);
    };

  }else{
    alert('Ya esta carta esta volteada')
  }

  mostrarCartas()
};

mostrarCartas = () =>{
  const seccion = document.getElementById('mesaJuego');
  seccion.innerHTML = '';

  cartas.forEach((carta, i) => {

    posicionCarta = carta.oculta ? '0' : carta.numero; 
    let card = document.createElement('div');
    card.innerHTML = `
      <div onclick=voltearCarta(${i}) class='border p-4 rounded text-black cursor-pointer'>${posicionCarta}</div>
    `;
    seccion.appendChild(card);
  })
};

mostrarCartas()