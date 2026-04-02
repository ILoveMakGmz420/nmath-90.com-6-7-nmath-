const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreElement = document.getElementById('score');
const resetBtn = document.getElementById('resetBtn');

let score = 0;
let box = {
    x: Math.random() * 350,
    y: Math.random() * 350,
    size: 50
};

// Draw the target
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#3498db";
    ctx.fillRect(box.x, box.y, box.size, box.size);
}

// Check for clicks
canvas.addEventListener('mousedown', function(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    if (mouseX >= box.x && mouseX <= box.x + box.size &&
        mouseY >= box.y && mouseY <= box.y + box.size) {
        
        score++;
        scoreElement.innerText = score;
        
        // Move the box to a new spot
        box.x = Math.random() * (canvas.width - box.size);
        box.y = Math.random() * (canvas.height - box.size);
    }
});

// Reset logic
resetBtn.addEventListener('click', () => {
    score = 0;
    scoreElement.innerText = score;
});

// Run the animation loop
function gameLoop() {
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
