const images = [
    "image1.jpg", // Replace with your actual image paths
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];

let currentIndex = 0;

const currentImage = document.getElementById("current-image");
const nextImage = document.getElementById("next-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateImages() {
    currentImage.src = images[currentIndex];
    nextImage.src = images[(currentIndex + 1) % images.length];
    
    // Fade out the next image and then fade in the current image
    nextImage.style.opacity = 0;
    setTimeout(() => {
        currentImage.style.opacity = 1;
        nextImage.style.opacity = 0.3; // Preview opacity for next image
    }, 500); // Match the timing of the transition
}

nextButton.addEventListener("click", () => {
    currentImage.style.opacity = 0; // Fade out current image
    currentIndex = (currentIndex + 1) % images.length; // Move to next image
    updateImages();
});

prevButton.addEventListener("click", () => {
    currentImage.style.opacity = 0; // Fade out current image
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to previous image
    updateImages();
});

// Initialize images
updateImages();
