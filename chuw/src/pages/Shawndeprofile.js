import React from 'react';
import '../styles/ShawndeProfile.css';

const ShawndeProfile = () => (
  <div>
    <div className="header">
              <Link to="/chuwwelcome" className="logo-button">
        <img src="images/chuwlogo-removebg-preview.jpg" alt="Logo" />
      </Link>
      <a href="chuwwelcome.js" className="logo-button">
        <img src="images/chuwlogo-removebg-preview.jpg" alt="Logo" />
      </a>
      <h1>Foodie Profile</h1>
    </div>
    
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <a href="user-profile.html">
          <img src="images/de.jpg" alt="BartendersFavBartender" />
        </a>
        <h2>BartendersFavBartender</h2>
      </div>
      
      {/* About Me Section */}
      <div className="section about-me">
        <h3>About Me</h3>
        <p>Yerrrr!!! It's BartendersFavBartender, your go-to bartender and mixology enthusiast. When I’m not shaking up cocktails, you’ll find me exploring new restaurants, indulging in delicious cuisine, or hosting tastings where I share my knowledge of food pairings. I love connecting with fellow foodies and drink lovers, sharing tips on how to elevate everyday meals with the right cocktail.</p>
      </div>

      {/* Recipes Section */}
      <div className="section recipes">
        <h3>Recipes</h3>
        <img src="images/pina.jpg" alt="strawberry pina colada" />
        <p>“& when it comes to a drink….. IMA HAVE IT!!! Want a sip of my Strawberry Piña colada?”</p>
        <p>Recipe: Blend strawberries, pineapple juice, coconut cream, and ice. Garnish with a strawberry and pineapple slice.</p>
      </div>

      {/* Chat Box Section */}
      <div className="section chat-box">
        <h3>Chat with Me</h3>
        <textarea rows="4" placeholder="Type your message..."></textarea>
        <button>Send</button>
      </div>
    </div>
  </div>
);

export default ShawndeProfile;