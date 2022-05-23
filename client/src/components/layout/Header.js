import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <>
        <ul>
            
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/:numberResult">Number Result</Link></li>
            <li> <Link to="/signUp">Sign Up</Link></li>
            <li> <Link to="/signIn">Sign In</Link></li>
            <li> <Link to="/profile">Profile</Link></li>
            <li> <Link to="/aboutUs">About Us</Link> </li>
            
        </ul>
    </>
  )
}

export default Header