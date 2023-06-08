//By Christian Wiles 2023
function createBadge() {
    const badge = document.createElement('img');
    badge.classList.add('badge');
    badge.src = 'assets/prefectbadge.png'; 
    badge.style.left = Math.random() * 100 + 'vw';
    badge.style.animationDuration = Math.random() * 3 + 2 + 's';
    badge.style.width = Math.random() * 50 + 10 + 'px';
    
    document.getElementById('badge-overlay').appendChild(badge);
    
    setTimeout(() => {
        badge.remove();
    }, 50000);
  }
  
  function makeItRain() {
    setInterval(createBadge, 200);
  }