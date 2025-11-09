// Obtener el elemento canvas y su contexto 2D
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Caracteres a usar: 0 y 1 para binario
const binary = "01";
// Tamaño de la fuente: esto determinará cuántas columnas hay
const fontSize = 16;
// Calcular el número de columnas basado en el ancho del canvas y el tamaño de la fuente
const columns = canvas.width / fontSize;

// Crear un array de "gotas" (drops)
// Cada gota representa una columna y su posición 'y' actual
let drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1; // Inicializar todas las gotas en la posición y=1
}

// Función principal para dibujar la animación
function draw() {
    // Rellenar el canvas con un rectángulo negro semi-transparente
    // Esto crea el efecto de "estela" o desvanecimiento
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Establecer el color del texto a morado
    ctx.fillStyle = '#9400D3'; // Un morado vibrante (Puedes cambiarlo por #8A2BE2 si prefieres)
    ctx.font = fontSize + 'px monospace';

    // Iterar sobre cada columna (gota)
    for (let i = 0; i < drops.length; i++) {
        // Elegir un carácter binario aleatorio (0 o 1)
        const text = binary[Math.floor(Math.random() * binary.length)];
        
        // Dibujar el carácter en la posición (x, y)
        // x = i * fontSize (columna actual)
        // y = drops[i] * fontSize (posición y actual de la gota)
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Incrementar la posición 'y' de la gota para que caiga
        drops[i]++;

        // Si la gota ha llegado al final de la pantalla...
        // ...y con una probabilidad aleatoria (para que no se reinicien todas a la vez)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            // Reiniciar la gota a la parte superior (y=0)
            drops[i] = 0;
        }
    }
}

// Iniciar la animación llamando a la función draw() repetidamente
// 33 milisegundos es aproximadamente 30 fotogramas por segundo (FPS)
setInterval(draw, 33);

// Opcional: Reajustar el canvas si el tamaño de la ventana cambia
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Recalcular columnas y reiniciar gotas podría ser necesario aquí
    // pero para simplicidad, lo omitimos. La animación se ajustará.
});