document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("theme"); // Select the dropdown
    const body = document.body; // Reference the body element
    const logo = document.querySelector(".logo"); // Reference the logo img

    // Function to handle theme change
    function changeTheme() {
        // Check the selected value
        if (themeSelector.value === "dark") {
            body.classList.add("dark"); // Add the 'dark' class to body
            logo.src = "./image/byui-logo_white.png"; // Switch to white logo for dark theme
        } else {
            body.classList.remove("dark"); // Remove the 'dark' class from body
            logo.src = "./image/byui-logo_blue.webp"; // Switch back to blue logo for light theme
        }
    }

    // Add event listener to the select element
    themeSelector.addEventListener("change", changeTheme);
});
