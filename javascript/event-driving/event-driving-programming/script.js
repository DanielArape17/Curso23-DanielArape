/**
 * Selecting elements:
 * 
 * The querySelector() method returns the first element that matches the specified selector in the document.
 * I.e.:
 * - document.querySelector("h1") returns the first <h1> element in the document.
 * - document.querySelector("#title") returns the element with id="title" in the document.
 * - document.querySelector(".itemList") returns the first element with class="itemList" in the document.
 */

const title = document.querySelector("#title");
const message = document.querySelector("#message");
const changeTextBtn = document.querySelector("#changeTextBtn");
const changeColorBtn = document.querySelector("#changeColorBtn");
const addItemBtn = document.querySelector("#addItemBtn");
const toggleClassBtn = document.querySelector("#toggleClassBtn");
const itemList = document.querySelector("#itemList");

/**
 * Event listeners:
 *
 * addEventListener(event, callback)
 *
 * - event: The event to listen for (string).
 * - callback: The function to call when the event occurs (function).
 */

/**
 * Forma 1:
 * function showOutput() {
 *  console.log("Button clicked!");
 * }
 *
 * changeTextBtn.addEventListener("click", showOutput);
 */
changeTextBtn.addEventListener("click", () =>{
  console.log("tralala");
});

changeTextBtn.addEventListener("click", () =>{
  changeTextBtn.textContent = "Button clicked!"
});

/**
 * addEventListener permite hacer cualquier cosa tras registrar un evento. Incluso alterar la propiedad style de los elementos.
 * 
 * P.e.:
 * - changeColorBtn.style.backgroundColor = "blue"; <-- Para cambiar directamente una propiedad.
 * - changeColorBtn.classList.add("bg-blue-500"); <-- Para cambiar la clase de un elemento (.add / .remove) (TailwindCSS).
 */

changeColorBtn.addEventListener("click", () => {
  changeColorBtn.style.backgroundColor = "blue";
  changeColorBtn.style.color = "white";
  // Con Tailwind seria de la siguiente manera
  // changeColorBtn.classList.add("bg-blue-500", "text-white");
  // changeColorBtn.classList.remove("bg-blue-500", "text-white");
});

/* Opciones 3 con hexagecimal
changeColorBtn.addEventListener("click", () => {
  const color = "#000000";  // <-- Elige el que más te guste :D
  changeColorBtn.style.backgroundColor = color;
  changeColorBtn.style.color = "white";
});
*/

addItemBtn.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = "New item"
  itemList.appendChild(newItem);
})

//Toggle no solo agrega algo, sino que tambien puede retirarlo
//Como un interruptor de luz
toggleClassBtn.addEventListener("click", () => {
  message.classList.toggle("highlight");
  title.classList.toggle("highlight-2");

  const status = message.classList.contains("highlight");
  const status2 = title.classList.contains("highlight-2");
  console.log(status, status2);

  if (status) {
    message.textContent = message.textContent + " (highlighted)";
  } else {
    message.textContent = message.textContent.replace(" (highlighted)", "");
  }

  if (status2) {
    toggleClassBtn.style.backgroundColor = "red";
  } else {
    toggleClassBtn.style.backgroundColor = "gray";
  }
});