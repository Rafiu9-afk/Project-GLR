function startGame() {
    // Play the sound
    const sound = document.getElementById('startSound');
    sound.play(); 

    
    setTimeout(() => {
        window.location.href = 'page1.html'; 
    }, 2000); // Delay (in milliseconds) before redirecting
}
function goToMainPage() {
    // Replace 'main-page.html' with the actual main page URL
    window.location.href ='mainpage.html';
}