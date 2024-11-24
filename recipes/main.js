import recipes from './recipes.mjs';

// Utility functions
function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    if (!Array.isArray(list) || list.length === 0) {
        throw new Error('Invalid or empty list provided');
    }
    const randomNum = random(list.length);
    return list[randomNum];
}

// Template functions
function createRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars.push('<span aria-hidden="true" class="icon-star">★</span>');
        } else if (i === fullStars && hasHalfStar) {
            stars.push('<span aria-hidden="true" class="icon-star-half">★</span>');
        } else {
            stars.push('<span aria-hidden="true" class="icon-star-empty">☆</span>');
        }
    }
    
    return `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
        ${stars.join('')}
    </span>`;
}

function createTagsTemplate(tags) {
    if (!Array.isArray(tags)) return '';
    return tags
        .map(tag => `<span class="tag">${tag.toLowerCase()}</span>`)
        .join('');
}

function createRecipeCard(recipe) {
    if (!recipe) return '';
    
    const {
        image = 'placeholder.jpg',
        name = 'Untitled Recipe',
        rating = 0,
        description = 'No description available',
        tags = []
    } = recipe;

    return `
        <div class="recipe-card">
            <div class="recipe-image">
                <img src="${image}" alt="${name}" loading="lazy">
            </div>
            <div class="recipe-content">
                ${createTagsTemplate(tags)}
                <h2>${name}</h2>
                ${createRatingStars(rating)}
                <p class="recipe-description">${description}</p>
            </div>
        </div>
    `;
}

// Rendering functions
function renderRecipes(recipesToRender) {
    const recipeContainer = document.getElementById('recipeContainer');
    if (!recipeContainer) return;

    const recipeHTML = recipesToRender
        .map(recipe => createRecipeCard(recipe))
        .join('');
        
    recipeContainer.innerHTML = recipeHTML;
}

function renderRandomRecipe() {
    try {
        const randomRecipe = getRandomListEntry(recipes);
        const recipeContainer = document.getElementById('recipeContainer');
        if (!recipeContainer) return;
        
        recipeContainer.innerHTML = createRecipeCard(randomRecipe);
    } catch (error) {
        console.error('Error rendering random recipe:', error);
    }
}

// Filter functions
function filterRecipes(searchTerm) {
    if (!searchTerm) return recipes;
    
    const normalizedSearch = searchTerm.toLowerCase().trim();
    
    return recipes.filter(recipe => {
        const searchableText = [
            recipe.name,
            recipe.description,
            ...(recipe.tags || [])
        ].join(' ').toLowerCase();
        
        return searchableText.includes(normalizedSearch);
    });
}

// Event handlers
function handleSearch(event) {
    const searchTerm = event.target.value;
    const filteredRecipes = filterRecipes(searchTerm);
    renderRecipes(filteredRecipes);
}

// Initialize
function initializeApp() {
    // Set up search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }

    // Prevent form submission
    const searchForm = document.querySelector('.search-container');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => e.preventDefault());
    }

    // Initial render with random recipe
    renderRandomRecipe();
}

// Start the application
document.addEventListener('DOMContentLoaded', initializeApp);

export {
    renderRecipes,
    renderRandomRecipe,
    filterRecipes,
    createRecipeCard
};