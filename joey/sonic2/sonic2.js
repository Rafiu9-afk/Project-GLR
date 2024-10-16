const ring = document.getElementById('ring');
const ringText = document.getElementById('ring-text');

let isLarge = false; 

ring.addEventListener('click', () => {
    if (!isLarge) {
        
        ring.style.width = '600px'; 
        ring.style.height = '500px'; 
        ringText.style.display = 'block'; 
    } else {
       
        ring.style.width = '50px'; 
        ring.style.height = '50px'; 
        ringText.style.display = 'none'; 
    }
    isLarge = !isLarge; 
});
