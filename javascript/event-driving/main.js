
//Los elements soy array porque pueden tener multiples elementos

//Agarra a todos los elementos que coincidan
const labels = document.querySelectorAll("label");
for (const label of labels) {
  label.textContent = "Adios";
}

//Solo seleciona al primero elemento que coincida
const label = document.querySelector("label");
label.textContent = "Adios";

//Solo agarra a un elemento en especifico
const btnTouchMe = document.getElementById("btnTouchMe");
btnTouchMe.textContent = "Hola";

const cosita = document.getElementsByClassName("cosita");
cosita[0].textContent = "Soy cosita";

/*
querySelector puede llegar a ser muy versatil 
como se muestra en el ejemplo

const label1 = document.querySelector("label[name='cosita1']");
label1.textContent = "Soy cosita 1 y me han cambiado";
*/