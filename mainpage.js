let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

function buttonClicked(imageIndex) {
    alert(`Button for Image ${imageIndex} clicked!`);
}

// Initialize the first image as active
showImage(currentImageIndex);

