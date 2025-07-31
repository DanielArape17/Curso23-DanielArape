/*
  Regex (Regular expressions)
  Las expresiones regulares son patrones utilizados para buscar y manipular texto.
  Son muy útiles para validar formatos, buscar coincidencias, reemplazar texto, etc.
*/

let nombre = "Juan Pérez";
// /patron/modificador
/*
  ^      -> Inicio de la cadena
  $      -> Fin de la cadena
  []      -> Conjunto de caracteres
  {n}   -> Cantidad exacta de repeticiones
  {n,}  -> Mínimo n repeticiones
  {n,m} -> Entre n y m repeticiones
  +    -> Una o más repeticiones
  *    -> Cero o más repeticiones
  ?    -> Cero o una repetición
  \d   -> Dígitos (0-9)
  \w   -> Caracteres alfanuméricos (letras, números y guiones bajos)
  \s   -> Espacios en blanco
  \D   -> No dígitos
  \W   -> No caracteres alfanuméricos
  \S   -> No espacios en blanco
  .    -> Cualquier carácter excepto saltos de línea
  |    -> Alternativa (OR)
  modificadores:
  g    -> Búsqueda global (todas las coincidencias)
  i   -> Ignorar mayúsculas y minúsculas
*/
let regexNombre = /^[A-Za-záéíóúÁÉÍÓÚ]+ [A-Za-záéíóúÁÉÍÓÚ]+$/
let nombre1 = "Juan Pérez Ródríguez";
regexNombre.test(nombre1); // true

/*
  Busca expresiones regulares para validar
  - Una cedula
  - Un correo
  - Una contraseña
*/

/*
  Realizar los siguientes programas

  1) Crea un juego de piedra papel o tijera donde el usuario pueda jugar contra la computadora. Pero,
  debes de tener un contador de partidas ganadas para cada jugar y partidas empatadas. Además de
  tener un historial de las ultimas 5 partidas jugadas.

  3) Crea un programa que permita al usuario realizar búsquedas en una lista de contactos.
  La lista debe contener al menos 5 contactos con nombre y número de teléfono. El usuario
  debe poder buscar por nombre y mostrar los resultados en pantalla.

  2) Crea un Todo list (Lista de tareas) donde el usuario pueda agregar, eliminar y marcar 
  como completadas las tareas. (Validar que el usuario no pueda agregar tareas vacias o
  que utilicen caracteres especiales como !@#$%^&*()_+ etc.)

  04/08/25
*/