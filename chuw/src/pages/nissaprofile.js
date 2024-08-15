import React from 'react';
import '../styles/NissaProfile.css';

const NissaProfile = () => (
  <div>
    <div className="header">
      <a href="chuwwelcome.js" className="logo-button">
        <img src="images/chuwlogo-removebg-preview.jpg" alt="Logo" />
      </a>
      <h1>Foodie Profile</h1>
    </div>
    
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <a href="user-profile.html">
          <img src="images/nissa.jpg" alt="WineMe_DineMe8" />
        </a>
        <h2>WineMe_DineMe8</h2>
      </div>
      
      {/* About Me Section */}
      <div className="section about-me">
        <h3>About Me</h3>
        <p>Hello! I'm WineMe_DineMe8, a Foodie explorer and adventurer on a mission to taste the world, one plate at a time. My passion for food has led me to dive into the vibrant world of dining, where I love discovering hidden gems and trendy hotspots alike.</p>
      </div>

      {/* Recipes Section */}
      <div className="section recipes">
        <h3>Recipes</h3>
        <img src="images/ziti.jpg" alt="baked ziti" />
        <p>“I just made baked ziti for the first time… shout to Chef Mr. MakeItHappen for the recipe”</p>
        <p>Recipe: Cook ziti pasta. Mix with marinara sauce, ricotta, mozzarella, and parmesan. Bake at 375°F for 25-30 minutes.</p>
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

export default NissaProfile;