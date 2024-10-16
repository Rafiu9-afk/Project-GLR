const ring = document.getElementById('ring');
const ringText = document.getElementById('ring-text');

let isLarge = false; 

ring.addEventListener('click', () => {
    if (!isLarge) {
        
        ring.style.width = '700px'; 
        ring.style.height = '600px'; 
        ringText.style.display = 'block'; 
    } else {
       
        ring.style.width = '50px'; 
        ring.style.height = '50px'; 
        ringText.style.display = 'none'; 
    }
    isLarge = !isLarge; 
});

document.getElementById("ring").addEventListener("click", function() {
    
    var tails = document.getElementById("tails");
    if (!tails.classList.contains('fly-in')) {
        tails.classList.add('fly-in');
    }

   
    var knuckles = document.getElementById("knuckles");
    if (!knuckles.classList.contains('run-in')) {
        knuckles.classList.add('run-in');
    }
});

