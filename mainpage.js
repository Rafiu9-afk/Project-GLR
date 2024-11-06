let currentImageIndex = 0;
const images = document.querySelectorAll(".carousel-image");

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) {
            img.classList.add("active");
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
   
}

showImage(currentImageIndex);

function buttonClicked(imageIndex) {
    if (imageIndex === 1) {
        window.location.href = "../joey/sonic1/sonic.html";
    } else if (imageIndex === 2) {
        window.location.href = "../Raf/pagina's/Minecraft.html";

        
    } else if (imageIndex === 3) {
        window.location.href = "../kaan/page1.html";
    } else if (imageIndex === 4) {
        window.location.href = "../Salah/website1/index.html";
    }
}
