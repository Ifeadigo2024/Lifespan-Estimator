function calculateLifespan() {
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const lifespan = 100 - (age * 0.5 + weight * 0.2);
    document.getElementById('result').innerText = `Estimated Lifespan: ${lifespan.toFixed(2)} years`;
}

function toggleMode() {
    document.body.classList.toggle('dark-mode');
    
    const modeToggle = document.getElementById('modeToggle');
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    } else {
        modeToggle.innerHTML = '<i class="fas fa-moon"></i> Toggle Dark Mode';
    }
}