import React, { useState, useEffect } from 'react';
import '../styles/chuwwelcome.css';

const Chuwwelcome = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [dropdownVisible, setDropdownVisible] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseOver = (index) => {
    setDropdownVisible((prevState) => ({ ...prevState, [index]: true }));
  };

  const handleMouseOut = (index) => {
    setDropdownVisible((prevState) => ({ ...prevState, [index]: false }));
  };

  return (
    <>
      <div>chuwwelcome</div>

      <div className="navbar">
        <a href="#">About Us</a>
        {['How To’s', 'Recipes', 'Meal Planning', 'Features', 'Equipment'].map((title, index) => (
          <div
            className="dropdown"
            key={index}
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={() => handleMouseOut(index)}
          >
            <div className="dropdown-btn">{title}</div>
            <div className="dropdown-container" style={{ display: dropdownVisible[index] ? 'flex' : 'none' }}>
              {title === 'How To’s' && (
                <>
                  <a href="#">Grilling Guide</a>
                  <a href="#">Stove Top Guide</a>
                  <a href="#">Techniques</a>
                  <a href="#">Canning and Preserving</a>
                  <a href="#">Couponing</a>
                </>
              )}
              {title === 'Recipes' && (
                <>
                  <a href="newuser.js">By Foodie/Influencer</a>
                  <a href="#">By Diet</a>
                  <a href="#">By Culture</a>
                  <a href="#">By Holiday & Season</a>
                  <a href="#">By Method</a>
                  <a href="chuw.js">Recipe Hub</a>
                </>
              )}
              {title === 'Meal Planning' && (
                <>
                  <a href="#">Meal Planner</a>
                  <a href="#">Meal Planning Guides</a>
                </>
              )}
              {title === 'Features' && (
                <>
                  <a href="#">Dining Out</a>
                  <a href="#">Meet & Greet Events</a>
                  <a href="#">Food History</a>
                  <a href="#">Food Industry</a>
                  <a href="#">Teach Me How</a>
                </>
              )}
              {title === 'Equipment' && (
                <>
                  <a href="#">Best Of</a>
                  <a href="#">Coffee & Tea</a>
                  <a href="#">Cookware</a>
                  <a href="#">Knives</a>
                  <a href="#">Tools & Gadgets</a>
                  <a href="#">Electric Appliances</a>
                  <a href="#">Bakeware</a>
                  <a href="#">Kitchen Basics</a>
                  <a href="#">Barware</a>
                  <a href="#">Mixology Kits</a>
                  <a href="#">Storage & Organization</a>
                  <a href="#">Books</a>
                  <a href="#">Seasonal Gifts</a>
                </>
              )}
            </div>
          </div>
        ))}
        <a href="#">Download CHUW App</a>
      </div>

      <div className="center-content">
        <img src="images/chuwlogo-removebg-preview.jpg" alt="CHUW Logo" />
        <h1>Welcome to CHUW</h1>
        <div className="welcome-text">
          <p>
            Personalize your experience by picking your favorite cuisine or cultural food you would like to try! Meet other Foodies, Influencers & Industry professionals! Connect and Share food! The best conversations and relationships are made with Great Food & a Good Drink! Join us Now.
          </p>
        </div>

        <div className="slideshow-container">
          <div className="mySlides" style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
            <video controls width="800">
              <source src="images/download.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mySlides" style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
            <video controls width="800">
              <source src="images/mealplan.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mySlides" style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
            <img src="images/foodiereview.jpg.jpg" alt="Event Preview" />
          </div>
        </div>

        <div className="btn-container">
          <button>Login</button>
          <button>
            <a href="signup.js"> sign up</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Chuwwelcome;