import React from 'react';
import '../styles/newuser.css';

const profiles = [
  {
    name: 'Love_Love_Lasagna',
    profileImage: 'images/nicole.jpg',
    profileLink: 'nicoleprofile.html',
    tonightPlate: '“My best friend and I were in the mood for cheddar bay biscuits and crab cakes. I didn’t feel like driving to Red lobster, so we made them at home.”',
    foodImage: 'images/cheddarbiscuits.jpg',
    foodAlt: 'Cheddar Bay Biscuits and Crab Cakes',
    recipe: 'Recipe: Mix flour, baking powder, sugar, and salt. Add butter and milk. Shape into biscuits and bake at 450°F for 10-12 minutes.'
  },
  {
    name: 'WineMe_DineMe8',
    profileImage: 'images/nissa.jpg',
    profileLink: 'nissaprofile.html',
    tonightPlate: '“I just made baked ziti for the first time… shout to Chef Mr. MakeItHappen for the recipe!”',
    foodImage: 'images/ziti.jpg',
    foodAlt: 'Baked Ziti',
    recipe: 'Recipe: Cook ziti pasta. Mix with marinara sauce, ricotta, mozzarella, and parmesan. Bake at 375°F for 25-30 minutes.'
  },
  {
    name: 'BartendersFavBartender',
    profileImage: 'images/ShawnDe.jpg',
    profileLink: 'shawndeprofile.html',
    tonightPlate: '“& when it comes to a drink….. IMA HAVE IT!!! Want a sip of my Strawberry Piña colada?”',
    foodImage: 'images/pina.jpg',
    foodAlt: 'Strawberry Piña Colada',
    recipe: 'Recipe: Blend strawberries, pineapple juice, coconut cream, and ice. Garnish with a strawberry and pineapple slice.'
  }
];

const ProfileCard = ({ profile }) => (
  <div className="profile">
    <a href={profile.profileLink}>
      <img src={profile.profileImage} alt={profile.name} />
    </a>
    <h2>{profile.name}</h2>
    <a className="follow-button" href="#">Follow</a>
    <h3>Tonight’s Plate:</h3>
    <p>{profile.tonightPlate}</p>
    <div className="food-image">
      <img src={profile.foodImage} alt={profile.foodAlt} />
      <div className="recipe">
        <p>{profile.recipe}</p>
      </div>
    </div>
  </div>
);

const ProfilePage = () => (
  <div>
    <div className="header">
      <a href="chuwwelcome.html" className="logo-button">
        <img src="images/chuwlogo-removebg-preview.jpg" alt="Logo" />
      </a>
      <h1>Connect with Foodies</h1>
    </div>
    <div className="profile-container">
      {profiles.map(profile => (
        <ProfileCard key={profile.name} profile={profile} />
      ))}
    </div>
  </div>
);

export default ProfilePage;