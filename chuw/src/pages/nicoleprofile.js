import React from 'react';
import '../styles/nicoleprofile.css';

const NicoleProfile = () => (
  <div>
    <div className="header">
      <a href="chuwwelcome.html" className="logo-button">
        <img src="images/chuwlogo-removebg-preview.jpg" alt="Logo" />
      </a>
      <h1>Foodie Profile</h1>
    </div>
    
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <a href="user-profile.html">
          <img src="images/Nicole.jpg" alt="Love_Love_Lasagna" />
        </a>
        <h2>Love_Love_Lasagna</h2>
      </div>
      
      {/* About Me Section */}
      <div className="section about-me">
        <h3>About Me</h3>
        <p>Hello! I'm Love_Love_Lasagna, a passionate home cook who loves experimenting with new recipes. Whether it's a quick weeknight dinner or a weekend feast, I'm always looking for ways to make delicious food at home. I also enjoy sharing my culinary adventures with friends and family.</p>
      </div>

      {/* Recipes Section */}
      <div className="section recipes">
        <h3>Recipes</h3>
        <img src="images/cheddarbiscuits.jpg" alt="Cheddar Bay Biscuits and Crab Cakes" />
        <p>“My best friend and I were in the mood for cheddar bay biscuits and crab cakes. I didn’t feel like driving to Red lobster, so we made them at home.”</p>
        <p>Recipe: Mix flour, baking powder, sugar, and salt. Add butter and milk. Shape into biscuits and bake at 450°F for 10-12 minutes.</p>
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

export default NicoleProfile;