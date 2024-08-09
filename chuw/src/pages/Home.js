import React from 'react'

const Home = () => {
  return (
   <div>
  <nav id="navbar">
  <div class="navbar-center">
      <div class="navbar-logo">
          <a href="#">CHEW</a>
      </div>
      <div class="navbar-links" id="navLinks">
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Recipes</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </div>
      <div class="navbar-icon" id="navbarIcon">
          <i class="fas fa-bars"></i>
      </div>
  </div>
</nav>

  <div class="container">
  <h1>Welcome to CHEW</h1>
  <p>Your social media platform for sharing and discovering amazing food!</p>
  <div class="button-container">
      <a href="login.html" class="button">Log In</a>
      <a href="signup.html" class="button">Sign Up</a>
  </div>
</div>
</div>   


  )
}

export default Home