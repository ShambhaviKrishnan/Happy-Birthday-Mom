function startConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    confettiContainer.innerHTML = ''; // Clear any existing confetti
  
    // Create multiple confetti pieces that appear around the whole screen
    for (let i = 0; i < 150; i++) {
      const confettiPiece = document.createElement('div');
      confettiPiece.classList.add('confetti-piece');
      confettiPiece.style.left = Math.random() * 100 + 'vw';
      confettiPiece.style.top = Math.random() * -100 + 'vh'; // Start confetti above the screen
      confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
      confettiPiece.style.backgroundColor = getRandomColor();
  
      confettiContainer.appendChild(confettiPiece);
    }
  }
  
  function getRandomColor() {
    const colors = ['#FF6347', '#FFB6C1', '#FFD700', '#7FFF00', '#00FA9A', '#00CED1', '#1E90FF', '#DA70D6'];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  