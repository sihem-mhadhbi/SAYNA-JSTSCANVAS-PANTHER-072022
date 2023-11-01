/**
 *  || APPARITION PROGRESSIVE WITH ANIMATION FADE IN 
 */
// Récupérez tous les éléments avec la classe "fade-slide"
const fadeSlideElements = document.querySelectorAll('.fade-in');

// Fonction pour vérifier si un élément est visible à l'écran
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Fonction pour gérer le défilement et l'apparition progressive des éléments avec un effet de slide
function handleScrollFadeSlide() {
  fadeSlideElements.forEach((element) => {
    if (isElementVisible(element)) {
      element.style.opacity = '1';
      element.style.visibility = 'visible';
      element.style.transform = 'translateX(0)';
    }
  });
}

// Ajoutez un gestionnaire d'événement de défilement
window.addEventListener('scroll', handleScrollFadeSlide);

// Appelez la fonction handleScrollFadeSlide 
handleScrollFadeSlide();

// APPARITION PROGRESSIVE WITH ZOOM ANIMATION
// Récupérez toutes les images avec la classe "fade-zoom"
const fadeZoomImages = document.querySelectorAll('.fade-zoom');

// Fonction pour vérifier si une image est visible à l'écran
function isImageVisible(image) {
  const rect = image.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Fonction pour gérer le défilement et l'apparition progressive
function handleScrollFadeZoom() {
  fadeZoomImages.forEach((image) => {
    if (isImageVisible(image)) {
      image.style.opacity = '1';
      image.style.visibility = 'visible';
      image.style.transform = 'scale(1)';
    }
  });
}

// Ajoutez un gestionnaire d'événement de défilement 
window.addEventListener('scroll', handleScrollFadeZoom);

// Appelez la fonction handleScrollFadeZoom 
handleScrollFadeZoom();

/** 
 *  || ANIMATION CANVAS
 */
// Get the canvas context
/** 
 *  || ANIMATION CANVAS
 */
// Get the canvas context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set the canvas position to fill the entire window
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = "100vw";
canvas.style.height = "100vh";

// Create an object to store mouse coordinates
const mouse = {
    x: 0,
    y: 0,
};

// Load the image
const image = new Image();
image.src = "assets/images/all/logo_souris_BP2_blanc.png";
image.style.width = '1em';
image.style.height = '1em';
// Define the desired size of the image
const imageSize = {
    width: 50,
    height:50,
};

// Listen for mouse movement event
document.addEventListener("mousemove", function (event) {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

// Draw the image at the mouse coordinates
function drawImage() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the image at the mouse coordinates
    const imageX = mouse.x - imageSize.width / 2;
    const imageY = mouse.y - imageSize.height / 2;
    ctx.drawImage(image, imageX, imageY, imageSize.width, imageSize.height);
}

// Wait for the image to load before drawing it
image.onload = function () {
    drawImage();
};

// Redraw the image on mouse movement
document.addEventListener("mousemove", drawImage);