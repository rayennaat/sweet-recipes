// Recipe Data
const recipes = [
    {
        id: 1,
        title: "Strawberry Cupcakes",
        category: "cakes",
        images: ["Strawberry-Cupcakes-Feature.jpg", "Strawberry-Cupcakes-Blog1.jpg", "Strawberry-Cupcakes-Blog2.jpg"],
        ingredients: [
            "1 ½ cups all-purpose flour",
            "1 ½ tsp baking powder",
            "¼ tsp salt",
            "½ cup unsalted butter, softened",
            "1 cup sugar",
            "2 large eggs",
            "2 tsp vanilla extract",
            "½ cup milk",
            "1 cup fresh strawberries, chopped"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Line muffin tin with cupcake liners.",
            "Whisk flour, baking powder, and salt in a bowl.",
            "Cream butter and sugar until light and fluffy. Add eggs one at a time.",
            "Mix in vanilla. Alternate adding flour mixture and milk.",
            "Fold in strawberries. Fill liners ⅔ full.",
            "Bake for 20-25 minutes. Cool completely before frosting."
        ]
    },
    {
        id: 2,
        title: "Chocolate Chip Cookies",
        category: "cookies",
        images: ["best-chocolate-chip-cookies-recipe-1.jpg", "best-chocolate-chip-cookie-recipe-cooling.jpg", "stack-of-chocolate-chip-cookies-1.webp"],
        ingredients: [
            "2 ¼ cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup unsalted butter, softened",
            "¾ cup granulated sugar",
            "¾ cup packed brown sugar",
            "2 large eggs",
            "2 tsp vanilla extract",
            "2 cups semisweet chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Combine flour, baking soda, and salt in small bowl.",
            "Beat butter, granulated sugar, and brown sugar until creamy.",
            "Add eggs one at a time, then vanilla.",
            "Gradually beat in flour mixture. Stir in chocolate chips.",
            "Drop by rounded tablespoon onto ungreased baking sheets.",
            "Bake for 9-11 minutes until golden brown."
        ]
    },
    {
        id: 3,
        title: "Berry Smoothie",
        category: "drinks",
        images: ["Mixed-Berry-Smoothie-Side.jpg", "Mixed-Berry-Smoothie-Overhead.jpg", "mixed-berry-smoothie-4-680x1020.webp"],
        ingredients: [
            "1 cup mixed berries (strawberries, blueberries, raspberries)",
            "1 banana",
            "½ cup Greek yogurt",
            "½ cup milk (or almond milk)",
            "1 tbsp honey",
            "½ tsp vanilla extract",
            "Ice cubes (optional)"
        ],
        instructions: [
            "Wash all berries and peel the banana.",
            "Add all ingredients to a blender.",
            "Blend until smooth and creamy.",
            "Add ice cubes if you prefer a colder smoothie.",
            "Pour into glasses and serve immediately."
        ]
    },
    {
        id: 4,
        title: "Vanilla Birthday Cake",
        category: "cakes",
        images: ["VANILLA-CAKE-25-S-01.jpg", "My-best-Vanilla-Cake_8.webp", "Vanilla-Cake-Blog-1.jpg"],
        ingredients: [
            "2 ½ cups all-purpose flour",
            "2 ½ tsp baking powder",
            "½ tsp salt",
            "1 cup unsalted butter, softened",
            "2 cups sugar",
            "4 large eggs",
            "1 tbsp vanilla extract",
            "1 cup milk"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round pans.",
            "Whisk together flour, baking powder, and salt.",
            "Cream butter and sugar until light and fluffy.",
            "Add eggs one at a time, then vanilla.",
            "Alternate adding flour mixture and milk, beginning and ending with flour.",
            "Divide batter between pans. Bake 25-30 minutes.",
            "Cool completely before frosting."
        ]
    },
    {
        id: 5,
        title: "Oatmeal Raisin Cookies",
        category: "cookies",
        images: ["Oatmeal-Raisin-Cookies-for-two-6.webp", "Oatmeal-Raisin-Cookies-1.jpg", "BX0219_raisin-pecan-oatmeal-cookies_s4x3.jpg"],
        ingredients: [
            "1 cup unsalted butter, softened",
            "1 cup packed brown sugar",
            "½ cup granulated sugar",
            "2 large eggs",
            "1 tsp vanilla extract",
            "1 ½ cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp cinnamon",
            "½ tsp salt",
            "3 cups old-fashioned oats",
            "1 cup raisins"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C).",
            "Cream together butter and both sugars until smooth.",
            "Beat in eggs one at a time, then vanilla.",
            "Combine flour, baking soda, cinnamon, and salt; stir into creamed mixture.",
            "Mix in oats and raisins.",
            "Drop by tablespoonfuls onto ungreased baking sheets.",
            "Bake 10-12 minutes until golden. Cool on wire racks."
        ]
    },
    {
        id: 6,
        title: "Pink Lemonade",
        category: "drinks",
        images: ["Pink-Lemonade-1.jpg", "pink_limounadha.avif", "pinka.webp"],
        ingredients: [
            "1 cup fresh lemon juice (about 4-6 lemons)",
            "½ cup granulated sugar",
            "3 cups cold water",
            "¼ cup cranberry juice or grenadine",
            "Ice cubes",
            "Lemon slices and fresh berries for garnish"
        ],
        instructions: [
            "In a pitcher, combine lemon juice and sugar. Stir until sugar dissolves.",
            "Add water and cranberry juice. Stir well.",
            "Taste and adjust sweetness if needed.",
            "Chill for at least 1 hour before serving.",
            "Serve over ice with lemon slices and berries."
        ]
    },
    {
    id: 7,
    title: "Blueberry Muffins",
    category: "cakes",
    images: ["71.webp", "73.jpg", "images.jpg"],
    ingredients: [
        "1 ½ cups all-purpose flour",
        "¾ cup sugar",
        "½ tsp salt",
        "2 tsp baking powder",
        "⅓ cup vegetable oil",
        "1 large egg",
        "⅓–½ cup milk",
        "1 cup fresh or frozen blueberries"
    ],
    instructions: [
        "Preheat oven to 400°F (200°C). Grease muffin cups or line with liners.",
        "Mix flour, sugar, salt, and baking powder.",
        "In another bowl, whisk oil, egg, and milk together.",
        "Combine wet and dry ingredients. Fold in blueberries.",
        "Fill muffin cups ¾ full and bake for 20-25 minutes."
    ]
},
{
    id: 8,
    title: "Iced Mocha Coffee",
    category: "drinks",
    images: ["81.jpg", "82.jpg", "83.webp"],
    ingredients: [
        "1 cup brewed coffee, cooled",
        "½ cup milk",
        "2 tbsp chocolate syrup",
        "Ice cubes",
        "Whipped cream (optional)"
    ],
    instructions: [
        "In a glass, combine coffee, milk, and chocolate syrup.",
        "Stir well until fully mixed.",
        "Add ice cubes.",
        "Top with whipped cream if desired. Serve immediately."
    ]
},
{
    id: 9,
    title: "Peanut Butter Cookies",
    category: "cookies",
    images: ["91.jpg", "92.jpg", "95"],
    ingredients: [
        "1 cup peanut butter",
        "1 cup sugar",
        "1 large egg",
        "1 tsp vanilla extract"
    ],
    instructions: [
        "Preheat oven to 350°F (175°C).",
        "Mix all ingredients in a bowl until combined.",
        "Roll into 1-inch balls, place on baking sheet.",
        "Press with a fork to make crisscross pattern.",
        "Bake for 10-12 minutes until lightly browned."
    ]
},
{
    id: 10,
    title: "Mango Lassi",
    category: "drinks",
    images: ["10.jpg", "11.jpg", "12.webp"],
    ingredients: [
        "1 cup ripe mango chunks",
        "½ cup plain yogurt",
        "¼ cup milk",
        "1 tbsp sugar (adjust to taste)",
        "¼ tsp ground cardamom",
        "Ice cubes"
    ],
    instructions: [
        "Add mango, yogurt, milk, sugar, and cardamom to a blender.",
        "Blend until smooth.",
        "Add ice cubes and blend again briefly.",
        "Pour into glasses and serve chilled."
    ]
}

];

// DOM Elements
const recipeGallery = document.getElementById('recipeGallery');
const recipeModal = document.getElementById('recipeModal');
const modalTitle = document.getElementById('modalTitle');
const ingredientsList = document.getElementById('ingredientsList');
const instructionsList = document.getElementById('instructionsList');
const sliderImages = document.getElementById('sliderImages');
const filterButtons = document.querySelectorAll('.filter-btn');
const closeBtn = document.querySelector('.close-btn');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentSlide = 0;
let currentRecipe = null;

// Display Recipes
function displayRecipes(filter = 'all') {
    recipeGallery.innerHTML = '';
    
    const filteredRecipes = filter === 'all' 
        ? recipes 
        : recipes.filter(recipe => recipe.category === filter);
    
    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.dataset.id = recipe.id;
        
        recipeCard.innerHTML = `
            <img src="images/${recipe.images[0]}" alt="${recipe.title}" class="recipe-img">
            <div class="recipe-title">${recipe.title}</div>
        `;
        
        recipeCard.addEventListener('click', () => openModal(recipe));
        recipeGallery.appendChild(recipeCard);
    });
}

// Open Modal with Recipe Details
function openModal(recipe) {
    currentRecipe = recipe;
    currentSlide = 0;
    
    modalTitle.textContent = recipe.title;
    
    // Clear previous content
    ingredientsList.innerHTML = '';
    instructionsList.innerHTML = '';
    sliderImages.innerHTML = '';
    
    // Add ingredients
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="heart">♥</span> ${ingredient}`;
        ingredientsList.appendChild(li);
    });
    
    // Add instructions
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="star">★</span> ${instruction}`;
        instructionsList.appendChild(li);
    });
    
    // Add slider images
    recipe.images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = `images/${image}`;
        img.alt = `${recipe.title} - ${index + 1}`;
        img.className = 'slider-img';
        if (index !== 0) img.style.display = 'none';
        sliderImages.appendChild(img);
    });
    
    recipeModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    recipeModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Change Slide
function changeSlide(direction) {
    const images = document.querySelectorAll('.slider-img');
    images[currentSlide].style.display = 'none';
    
    if (direction === 'next') {
        currentSlide = (currentSlide + 1) % images.length;
    } else {
        currentSlide = (currentSlide - 1 + images.length) % images.length;
    }
    
    images[currentSlide].style.display = 'block';
}

// Filter Recipes
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        displayRecipes(button.dataset.filter);
    });
});

// Event Listeners
closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', () => changeSlide('prev'));
nextBtn.addEventListener('click', () => changeSlide('next'));

// Close modal when clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        closeModal();
    }
});

// Initialize
displayRecipes();
// Mobile Menu Toggle
const hamburger = document.querySelector('.nav-hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change hamburger to X when active
    if (navLinks.classList.contains('active')) {
        hamburger.textContent = '✕';
    } else {
        hamburger.textContent = '☰';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.textContent = '☰';
    });
});