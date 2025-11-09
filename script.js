// Obtener el elemento canvas y su contexto 2D
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// --- ACTUALIZADO: Set de caracteres estilo "Matrix" ---
// Incluye Katakana, letras, números
const characters = "アァカサタナハマヤラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユルヴグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨロヲゴゾドボポ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 16;
const columns = canvas.width / fontSize;

// Crear un array de "gotas" (drops)
let drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1; 
}

// Función principal para dibujar la animación
function draw() {
    // Rellenar el canvas con un rectángulo negro semi-transparente
    ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Establecer el color del texto a morado
    ctx.fillStyle = '#9400D3'; // El mismo morado vibrante
    ctx.font = fontSize + 'px monospace';

    // Iterar sobre cada columna (gota)
    for (let i = 0; i < drops.length; i++) {
        
        // --- ACTUALIZADO: Elige un caracter aleatorio del set ---
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Incrementar la posición 'y' de la gota para que caiga
        drops[i]++;

        // Si la gota ha llegado al final de la pantalla...
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            // Reiniciar la gota a la parte superior (y=0)
            drops[i] = 0;
        }
    }
}

// Iniciar la animación
setInterval(draw, 33);

// Opcional: Reajustar el canvas si el tamaño de la ventana cambia
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Esto es un reajuste simple, la animación se adaptará.
});
