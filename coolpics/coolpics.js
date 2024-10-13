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

window.addEventListener("resize", handleResize);
document.addEventListener("DOMContentLoaded", handleResize);  // Call on page load



document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.gallery img'); // Selects all images within the gallery
    const viewer = document.querySelector('.viewer'); // Selects the viewer element
    const viewerImage = viewer.querySelector('img'); // Selects the image element within the viewer
    const closeButton = document.querySelector('.close-viewer'); // Selects the close button

    images.forEach(image => {
        image.addEventListener('click', function() {
            viewerImage.src = this.src; // Sets the source of the viewer's image to the clicked image's source
            viewer.classList.add('active'); // Makes the viewer visible
        });
    });

    closeButton.addEventListener('click', function() {
        viewer.classList.remove('active'); // Hides the viewer
    });
});

