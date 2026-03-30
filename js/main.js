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
            document.body.style.backgroundColor = '#ff00ff';
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