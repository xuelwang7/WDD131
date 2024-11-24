import recipes from './recipes.mjs';



//random function 

function random(num) {
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

// to test
console.log(getRandomListEntry(recipes));



// Function to create rating stars
function createRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push('<span aria-hidden="true" class="icon-star">★</span>');
        } else {
            stars.push('<span aria-hidden="true" class="icon-star-empty">☆</span>');
        }
    }
    
    return `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
        ${stars.join('')}
    </span>`;
}

// Function to create recipe card
function createRecipeCard(recipe) {
    const tags = recipe.tags.map(tag => 
        `<span class="tag">${tag.toLowerCase()}</span>`
    ).join('');

    return `
        <div class="recipe-card">
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>
            <div class="recipe-content">
                ${tags}
                <h2>${recipe.name}</h2>
                ${createRatingStars(recipe.rating)}
                <p class="recipe-description">${recipe.description}</p>
            </div>
        </div>
    `;
}

// Function to render recipes
function renderRecipes(recipesToRender) {
    const recipeContainer = document.getElementById('recipeContainer');
    recipeContainer.innerHTML = recipesToRender
        .map(recipe => createRecipeCard(recipe))
        .join('');
}

// Function to filter recipes
function filterRecipes(searchTerm) {
    return recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
}

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value;
    const filteredRecipes = filterRecipes(searchTerm);
    renderRecipes(filteredRecipes);
});

// Initial render
renderRecipes(recipes);