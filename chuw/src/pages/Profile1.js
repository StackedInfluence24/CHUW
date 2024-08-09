import React from 'react'
import './profile1.css'


const Profile1 = () => {
  return ( <div class="container">
  <h1>Nicole Niles-Springer</h1>
  <p>Welcome to your profile, Nicole! Here are some of my favorite recipes:</p>
  
  <div class="recipe">
      <h2>1. Spaghetti Aglio e Olio</h2>
      <p>A simple Italian pasta dish made with garlic, olive oil, and chili flakes.</p>
      <h3>Ingredients:</h3>
      <ul>
          <li>200g spaghetti</li>
          <li>4 cloves garlic, thinly sliced</li>
          <li>60ml olive oil</li>
          <li>1 tsp chili flakes</li>
          <li>Fresh parsley, chopped</li>
      </ul>
      <h3>Instructions:</h3>
      <ol>
          <li>Cook spaghetti according to package instructions.</li>
          <li>In a pan, heat olive oil and sauté garlic until golden.</li>
          <li>Add chili flakes, then mix in the cooked spaghetti.</li>
          <li>Garnish with parsley and serve.</li>
      </ol>
  </div>

  <div class="recipe">
      <h2>2. Chicken Tikka Masala</h2>
      <p>A flavorful Indian dish featuring marinated chicken in a spiced tomato sauce.</p>
      <h3>Ingredients:</h3>
      <ul>
          <li>500g chicken breast, diced</li>
          <li>200g yogurt</li>
          <li>2 tbsp tikka masala paste</li>
          <li>400g canned tomatoes</li>
          <li>Fresh coriander, for garnish</li>
      </ul>
      <h3>Instructions:</h3>
      <ol>
          <li>Marinate chicken in yogurt and tikka masala for at least 1 hour.</li>
          <li>Cook marinated chicken until browned.</li>
          <li>Add canned tomatoes and simmer for 20 minutes.</li>
          <li>Garnish with fresh coriander and serve with rice.</li>
      </ol>
  </div>

  <div class="recipe">
      <h2>3. Chocolate Chip Cookies</h2>
      <p>A classic dessert featuring gooey chocolate chips in a buttery cookie.</p>
      <h3>Ingredients:</h3>
      <ul>
          <li>125g butter, softened</li>
          <li>100g brown sugar</li>
          <li>1 egg</li>
          <li>200g flour</li>
          <li>100g chocolate chips</li>
      </ul>
      <h3>Instructions:</h3>
      <ol>
          <li>Preheat oven to 180°C (350°F).</li>
          <li>In a bowl, cream together butter and sugar.</li>
          <li>Mix in egg, then fold in flour and chocolate chips.</li>
          <li>Drop spoonfuls onto a baking sheet and bake for 10-12 minutes.</li>
      </ol>
  </div>

  <button onclick="location.href='index.html'">Log Out</button>
</div>
    
  )
}

export default Profile