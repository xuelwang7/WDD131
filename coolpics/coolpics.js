document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", () => {
        
        menu.classList.toggle("hide");
    });
});



// Ensure the menu is correctly set when the page loads or when resized
function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");  
    } else {
        menu.classList.add("hide");     // Ensure menu is hidden on smaller screens
    }
}
handleResize();

window.addEventListener("resize", handleResize);
document.addEventListener("DOMContentLoaded", handleResize);  // Call on page load


const viewer = document.querySelector('.viewer');
const closeButton = document.querySelector('.close-viewer');
const images = document.querySelectorAll('.gallery img');
const modalImage = viewer.querySelector('img'); // Get the modal image element

images.forEach(image => {
    image.addEventListener('click', () => {
        modalImage.src = image.src;  // Set the source of the modal image to the clicked image
        modalImage.alt = image.alt;  // Set the alt text as well
        viewer.classList.add('active'); // Show the modal
    });
});

closeButton.addEventListener('click', () => {
    viewer.classList.remove('active'); // Hide the modal
});

