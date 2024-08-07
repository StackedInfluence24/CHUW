import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // If you're using React Router for navigation

const Createp = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    zipcode: '',
    email: '',
    gender: ''
  });

  const navigate = useNavigate(); // Use this for navigation

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here if needed
    // Redirect to the blank slate page
    navigate('/blankslate');
  };

  return (
    <div className="container">
      <h1>Create Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name (max 30 characters):</label>
        <input
          type="text"
          id="name"
          name="name"
          maxLength="30"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="age">Age (7-100):</label>
        <input
          type="number"
          id="age"
          name="age"
          min="7"
          max="100"
          value={formData.age}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="zipcode">Zip Code (max 6 digits):</label>
        <input
          type="number"
          id="zipcode"
          name="zipcode"
          maxLength="6"
          value={formData.zipcode}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          maxLength="30"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-binary</option>
          <option value="prefer-not-to-answer">Prefer not to answer</option>
        </select>
        
        <button type="submit">Let's Food!</button>
      </form>
    </div>
  );
};

export default Createp;
