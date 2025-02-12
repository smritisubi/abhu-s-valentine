document.querySelector('.card').addEventListener('click', function() {
    this.classList.add('open');
});

document.getElementById('escapeButton').addEventListener('click', function() {
    const responseDiv = document.getElementById('response');
    responseDiv.textContent = "Oops. Error 404. Escaping me? Please. You're stuck now.";
    responseDiv.style.color = 'darkred';
});

document.getElementById('surrenderButton').addEventListener('click', function() {
    const responseDiv = document.getElementById('response');
    responseDiv.textContent = "No refunds, no take backs - *growls possessively* You're mine. But well, as much as you're mine, I'm yours.";
    responseDiv.style.color = 'darkgreen';
    
    // Show the final message
    const finalMessage = document.getElementById('finalMessage');
    finalMessage.style.display = 'block';
    finalMessage.innerHTML = "Happy Valentine's Day, Handsome ❤️";
    
    // Show fireworks effect
    const fireworksDiv = document.getElementById('fireworks');
    fireworksDiv.style.opacity = 1;
    createFireworks();
});

function createFireworks() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        heart.style.animationDelay = `${Math.random() * 0.5}s`;
        document.getElementById('fireworks').appendChild(heart);
    }
}
