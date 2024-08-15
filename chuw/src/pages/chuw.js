import React, { useState } from 'react';
import '../styles/chuw.css';

const Header = () => (
  <div className="header">
    <a href="chuwwelcome.html" className="logo-button">
      <img src="images/chuwlogo-removebg-preview.jpg" alt="Logo" />
    </a>
    <h1>CHUW</h1>
  </div>
);

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="tabs">
    <button className={`tablinks ${activeTab === 'Food' ? 'active' : ''}`} onClick={() => setActiveTab('Food')}>FORK IT OVER!</button>
    <button className={`tablinks ${activeTab === 'Drinks' ? 'active' : ''}`} onClick={() => setActiveTab('Drinks')}>PASS THE BEV!</button>
    <button className={`tablinks ${activeTab === 'Desserts' ? 'active' : ''}`} onClick={() => setActiveTab('Desserts')}>SOMETHING SWEET!</button>
  </div>
);

const TabContent = ({ activeTab }) => {
  const recipes = {
    Food: [
      {
        title: 'Baked Ziti',
        imgSrc: 'https://i.ytimg.com/vi/zoemAGzIE78/maxresdefault.jpg',
        ingredients: [
          '1 lb. Ziti Pasta',
          '1 - 1.5 lbs. ground beef or your meat of choice',
          '2 tbsp. Olive Oil',
          '1 Onion, diced',
          '3 Cloves Garlic minced',
          '25 oz Marinara Sauce',
          '14.5 oz Petite Diced Tomatoes',
          '1 cup Water',
          '1 tsp. Dried Basil',
          '1 tsp. Dried Oregano',
          '2 Bay Leaves',
          'Salt & Pepper to taste',
          '8 oz. Mozzarella',
          '1/4 cup Parmesan Cheese',
          '1 cup part skim Mozzarella shredded',
        ],
        directions: [
          'Bring a large pot of lightly salted water to a boil. Add ziti pasta, and cook until al dente, about 8 minutes; drain.',
          'Meanwhile, brown ground beef and onion in a large skillet over medium heat; stir in spaghetti sauce and simmer for 30 minutes.',
          'Preheat the oven to 350 degrees F (175 degrees C). Butter a 9x13-inch baking dish.',
          'Spread 1/2 of the ziti in the bottom of the prepared dish; top with Provolone cheese, sour cream, 1/2 of the meat sauce, remaining ziti, mozzarella cheese, and remaining meat sauce.',
          'Top with grated Parmesan cheese.',
          'Bake in the preheated oven until heated through and the cheeses have melted, about 30 minutes.',
        ],
      },
      // Add more food recipes here
    ],
    Drinks: [
      {
        title: 'Strawberry Pina Colada',
        imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWjskZTzB3evLykh-EmBahXXfWh5bQ69IMQ&s',
        ingredients: [
          '1 ounce light rum',
          '1 ounce Malibu coconut rum (or 1 1/2 ounces light rum)',
          '2 ounces strawberries (fresh or frozen)',
          '1 small banana',
          '2 ounces coconut cream',
          '2 ounces unsweetened pineapple juice',
          '1 cup ice',
          'Pineapple wedge, garnish',
        ],
        directions: [
          'Blend the two rums and strawberries in a blender until a smooth paste has formed.',
          'Pour mixture into a tall Collins or hurricane glass.',
          'Slowly pour mixture into glass with red rum mix. Watch strawberry mixture oozing its way to the top along the sides of the glass, creating a flowing lava effect.',
          'Garnish with a pineapple wedge and paper umbrella, if desired.',
        ],
      },
      // Add more drink recipes here
    ],
    Desserts: [
      {
        title: 'Very Berry Glazed Donuts',
        imgSrc: 'https://www.the350degreeoven.com/wp-content/uploads/2012/05/DSC_0348fix-300x199.jpg',
        ingredients: [
          '2.5 oz all-purpose flour',
          '6 tbsp sugar',
          '1/4 tsp baking soda',
          '1/4 tsp salt',
          '1/3 cup neutral oil',
          '1/4 cup milk',
          '1 large egg',
          '1/2 tsp vinegar',
          '1/4 tsp vanilla extract',
          '1/2 cup chopped fresh strawberries to end up with 1/4 cup puree',
          '6 oz confectioners sugar',
          'Butter or oil for greasing the pan',
        ],
        directions: [
          'Preheat the oven to 350 degrees F. Grease a 6-well donut pan with butter or oil.',
          'In a medium bowl, whisk to combine the flour, sugar, baking soda, and salt. Set aside.',
          'In another bowl, whisk to combine the oil, milk, egg, vinegar, and vanilla extract.',
          'Add this liquid to the dry ingredients and whisk until just combined. Evenly divide the batter into the six donut wells.',
          'Bake for 13 minutes until a toothpick inserted into one of the donuts comes out cleanly. Let cool while you prepare the strawberry glaze.',
          'Puree the fresh strawberries in a food processor or blender until smooth. Pour into a low bowl and whisk in confectioners sugar until fully absorbed.',
          'Dip the cooled donuts into the strawberry glaze and devour!',
        ],
      },
      // Add more dessert recipes here
    ],
  };

  return (
    <div className="tabcontent">
      <div className="grid-container">
        {recipes[activeTab].map((recipe, index) => (
          <Recipe key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

const Recipe = ({ recipe }) => (
  <div className="recipe">
    <h4>{recipe.title}</h4>
    <ImageContainer imgSrc={recipe.imgSrc} ingredients={recipe.ingredients} directions={recipe.directions} />
  </div>
);

const ImageContainer = ({ imgSrc, ingredients, directions }) => (
  <div className="image-container">
    <img src={imgSrc} alt={imgSrc} />
    <Overlay ingredients={ingredients} directions={directions} />
  </div>
);

const Overlay = ({ ingredients, directions }) => (
  <div className="overlay">
    <div className="text scroll">
      <h4>Ingredients:</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Directions:</h4>
      <ol>
        {directions.map((direction, index) => (
          <li key={index}>{direction}</li>
        ))}
      </ol>
    </div>
  </div>
);

const chuw = () => {
  const [activeTab, setActiveTab] = useState('Food');

  return (
    <div>
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default chuw;