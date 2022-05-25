import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
        <ul>
            
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/NumberResult/:number">Number Result</Link></li>
            <li> <Link to="/signUp">Sign Up</Link></li>
            <li> <Link to="/signIn">Sign In</Link></li>
            <li> <Link to="/profile/:user">Profile</Link></li>
            <li> <Link to="/aboutUs">About Us</Link> </li>
            <li> <Link to="/signOut">Sign Out</Link> </li>
            
        </ul>
    </>
  )
}

export default Header