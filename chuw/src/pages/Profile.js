// src/pages/Profile.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/profile1.css';

const Profile = () => {
  const location = useLocation();
  const { profileData } = location.state || {};

  if (!profileData) {
    return <div>No profile data found.</div>;
  }

  return (
    <div className="container">
      <h1>Your Profile</h1>
      <div className="profile-image">
        {profileData.profilePic && <img src={URL.createObjectURL(profileData.profilePic)} alt="Profile" />}
      </div>
      <p>{profileData.aboutYou}</p>
      <div className="recipe">
        <h2>Your Recipe</h2>
        <p>{profileData.recipePost}</p>
        {profileData.recipeImages.length > 0 && (
          <div className="recipe-images">
            {profileData.recipeImages.map((image, index) => (
              <img key={index} src={URL.createObjectURL(image)} alt={`Recipe ${index}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
