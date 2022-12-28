<!-- Este es el código HTML para crear la estructura del juego -->
<div id="juego">
  <canvas id="lienzo"></canvas>
</div>

<!-- Este es el código HTML para crear el marcador -->
<div id="marcador">
  Puntos: <span id="puntos">0</span>
</div>

<!-- Este es el código HTML para crear los botones de juego -->
<div id="botones">
  <button id="iniciar">Iniciar</button>
  <button id="pausar">Pausar</button>
</div>
/* Este es el código CSS para estilizar el juego */
#juego {
  width: 500px;
  height: 500px;
  border: 2px solid black;
  position: relative;
}

#lienzo {
  width: 100%;
  height: 100%;
}

#marcador {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

#botones {
  display: flex;
  justify-content: space-around;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #333;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}
// Este es el código JavaScript para hacer funcionar el juego

// Declaramos las variables necesarias
const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");
const puntosSpan = document.getElementById("puntos");
const iniciarBtn = document.getElementById("iniciar");
const pausarBtn = document.getElementById("pausar");

// Declaramos las constantes necesarias
const tamañoCelda = 20; // Tamaño de cada celda en px
const ancho = lienzo.width; // Ancho del lienzo en px
const alto = lienzo.height; // Alto del lienzo en px
const filas = alto / tamañoCelda; // Número de filas
const columnas = ancho / tamañoCelda; // Número de columnas

// Creamos la serpiente y la comida
let serpiente = [{ x: 150, y: 150 }]; // Iniciamos la serpiente en el centro del lienzo
let comida = { x: 300, y: 300 }; // Iniciamos la comida en una posición aleatoria

// Creamos la variable para el intervalo de tiempo
let intervalo;

//
