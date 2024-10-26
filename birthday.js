// script.js

document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title");
    const message = document.getElementById("message");

    setTimeout(() => {
        title.classList.add("animated-title");
    }, 1000);

    setTimeout(() => {
        message.classList.add("animated-message");
    }, 2000);
});

// script.js

function createConfetti() {
    const colors = ['#FF0D00', '#FF8C00', '#FFD700', '#0DD30D', '#00BFFF', '#FF1493']; // Colors for confetti
    const confettiContainer = document.getElementById('confetti');

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        
        // Randomize position
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Randomize animation duration and delay
        const duration = Math.random() * 2 + 3 + 's'; // Between 3s and 5s
        const delay = Math.random() * 2 + 's'; // Random delay
        
        confettiPiece.style.animationDuration = duration;
        confettiPiece.style.animationDelay = delay;

        confettiContainer.appendChild(confettiPiece);

        // Remove confetti piece after animation
        confettiPiece.addEventListener('animationend', () => {
            confettiPiece.remove();
        });
    }
}

// Start confetti animation when the page loads
window.onload = createConfetti;

