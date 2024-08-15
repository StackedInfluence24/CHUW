// src/pages/BlankSlate.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/blankslate.css';


const BlankSlate = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [aboutYou, setAboutYou] = useState('');
  const [recipePost, setRecipePost] = useState('');
  const [recipeImages, setRecipeImages] = useState([]);
  const navigate = useNavigate();

  const handleProfilePicChange = (e) => setProfilePic(e.target.files[0]);
  const handleAboutYouChange = (e) => setAboutYou(e.target.value);
  const handleRecipePostChange = (e) => setRecipePost(e.target.value);
  const handleRecipeImagesChange = (e) => setRecipeImages([...e.target.files]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const profileData = { profilePic, aboutYou, recipePost, recipeImages };
    navigate('/profile', { state: { profileData } });
  };

  return (
    <div className="container">
      <h1>Welcome to Your Blank Slate!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="profilePic">Upload Profile Picture:</label>
        <input type="file" id="profilePic" name="profilePic" accept="image/*" onChange={handleProfilePicChange} required />

        <label htmlFor="aboutYou">Tell us about yourself (max 1,000 characters):</label>
        <textarea id="aboutYou" name="aboutYou" maxLength="1000" rows="5" value={aboutYou} onChange={handleAboutYouChange} required></textarea>

        <label htmlFor="recipePost">Post a Recipe (max 10,000 characters):</label>
        <textarea id="recipePost" name="recipePost" maxLength="10000" rows="10" value={recipePost} onChange={handleRecipePostChange} required></textarea>

        <label htmlFor="recipeImages">Upload Recipe Images:</label>
        <input type="file" id="recipeImages" name="recipeImages" accept="image/*" multiple onChange={handleRecipeImagesChange} />

        <button type="submit">Let's Food!</button>
      </form>

      <div className="fun-facts">
        <h2>Fun Food Facts</h2>
        <ul>
          <li>Did you know? Avocados are fruits, not vegetables!</li>
          <li>Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old!</li>
          <li>Chocolate was once used as currency!</li>
        </ul>
      </div>
    </div>
  );
};

export default BlankSlate;
