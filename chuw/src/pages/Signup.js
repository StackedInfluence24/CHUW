import React from 'react'
import './signup.css'

const signup = () => {
  return ( <div class="container">
  <h1>Sign Up for CHEW</h1>
  <form onsubmit="return signUpUser(event)">
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" value="email@email.com" required/>
      
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" value="username" required/>
      
      <label for="password">Password:</label>
      <input type="password" id="password" 
      name="password" value="password" required/>


    <button><a href="createp.html">Sign Up</a></button>
  </form>
  <p>Already have an account? <a href="login.html">Log In</a></p>

</div>
  )
}

export default signup