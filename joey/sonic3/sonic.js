const video = document.getElementById('myVideo');
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', () => {
    video.style.display = 'block';
    video.play();
    playButton.style.display = 'none';
});
                                                                                                                                            