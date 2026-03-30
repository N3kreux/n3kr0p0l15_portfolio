// Terminal fake commands
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const cmd = terminalInput.value.toLowerCase();
        terminalInput.value = '';

        if (cmd === 'help') {
            terminalOutput.textContent = 'Commands: list_projects, explore, glitch';
        } else if (cmd === 'list_projects') {
            terminalOutput.textContent = 'Projects: Glitchy Terminal, ASCII Horror';
        } else if (cmd === 'explore') {
            terminalOutput.textContent = 'You found a hidden glitch...';
            document.body.style.backgroundColor = '#0a0a0a';
        } else if (cmd === 'glitch') {
            terminalOutput.textContent = '!!! SYSTEM GLITCH !!!';
            document.body.style.backgroundColor = '#76c3e7';
            setTimeout(() => document.body.style.backgroundColor = 'black', 500);
        } else {
            terminalOutput.textContent = 'Unknown command. Type "help".';
        }
    }
});

// Project tile click event
const tiles = document.querySelectorAll('.project-tile');
tiles.forEach(tile => {
    tile.addEventListener('click', () => {
        alert(`Opening project: ${tile.dataset.project}`);
    });
});

const canvas = document.getElementById('codeRain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const columns = canvas.width / 20;
const drops = Array(Math.floor(columns)).fill(1);

function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.1)'; // fade effect
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = '#0f0'; // neon green
    ctx.font = '16px monospace';

    drops.forEach((y, i) => {
        const text = String.fromCharCode(33 + Math.random() * 94); // random ASCII
        ctx.fillText(text, i * 20, y * 20);
        drops[i]++;
        if(drops[i] * 20 > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
    });

    requestAnimationFrame(draw);
}

draw();