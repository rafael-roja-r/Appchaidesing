// Obtén el elemento canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Variables para almacenar las coordenadas de inicio y fin de la línea
var startX, startY, endX, endY;

// Bandera para indicar si el usuario está dibujando una línea
var isDrawing = false;

// Evento que se activa cuando el usuario presiona el botón del mouse
canvas.addEventListener("mousedown", function (event) {
  // Guarda las coordenadas iniciales de la línea
  startX = event.clientX - canvas.offsetLeft;
  startY = event.clientY - canvas.offsetTop;

  // Indica que se ha iniciado el dibujo de una línea
  isDrawing = true;
});

// Evento que se activa cuando el usuario mueve el mouse
canvas.addEventListener("mousemove", function (event) {
  if (isDrawing) {
    // Actualiza las coordenadas finales de la línea
    endX = event.clientX - canvas.offsetLeft;
    endY = event.clientY - canvas.offsetTop;

    // Limpia el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibuja la línea actualizada
    drawLine(startX, startY, endX, endY);
  }
});

// Evento que se activa cuando el usuario suelta el botón del mouse
canvas.addEventListener("mouseup", function (event) {
  if (isDrawing) {
    // Actualiza las coordenadas finales de la línea
    endX = event.clientX - canvas.offsetLeft;
    endY = event.clientY - canvas.offsetTop;

    // Dibuja la línea final
    drawLine(startX, startY, endX, endY);

    // Reinicia las variables
    startX = startY = endX = endY = 0;
    isDrawing = false;
  }
});

// Función para dibujar una línea en el canvas
function drawLine(startX, startY, endX, endY) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
}
