// Select the dropdown element from the HTML
const themeSelector = document.querySelector('#theme');

// Function to handle theme change
function changeTheme() {
    const body = document.body; // Select the body element
    const logo = document.querySelector('.logo'); // Select the logo img element

    // Check the current value of the theme selector
    if (themeSelector.value === 'dark') {
        body.classList.add('dark'); // Add dark class to the body
        logo.src = './image/byui-logo_white.png'; // Change the logo to white version
    } else {
        body.classList.remove('dark'); // Remove the dark class
        logo.src = './image/byui-logo_blue.webp'; // Change the logo back to blue version
    }
}

// Add an event listener to the themeSelector element to trigger the changeTheme function
themeSelector.addEventListener('change', changeTheme);
