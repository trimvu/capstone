import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

    const auth = useSelector(state => state.auth)
    
    // console.log(auth)
    
  return (
    <>

{/* HEADER NAVBAR */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand">Spam Call Registry</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                        {
                            auth === '' || auth === undefined
                            ?
                            <li className="nav-item"><Link to="/signIn" className="nav-link">Sign In</Link></li>
                            :
                            ''
                        }
                        {
                            auth === '' || auth === undefined
                            ?
                            <li className="nav-item"><Link to="/signUp" className="nav-link">Sign Up</Link></li>
                            :
                            ''
                        }
                        {/* <li className="nav-item"><Link to="/signOut" className="nav-link">Sign Out</Link></li> */}
                        {/* <li className="nav-item"><Link to="/NumberResult/:number" className="nav-link">Number Result</Link></li> */}
                        <li className="nav-item"><Link to="/profile/" className="nav-link">Profile</Link></li>
                        <li className="nav-item"><Link to="/aboutUs" className="nav-link">About Us</Link></li>
                        
                    </ul>
                </div>
            </div>
        </nav>

{/* ORIGINAL TESTING CODE */}
        {/* <ul>
            
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/NumberResult/:number">Number Result</Link></li>
            <li> <Link to="/signUp">Sign Up</Link></li>
            <li> <Link to="/signIn">Sign In</Link></li>
            <li> <Link to="/profile/:user">Profile</Link></li>
            <li> <Link to="/aboutUs">About Us</Link> </li>
            <li> <Link to="/signOut">Sign Out</Link> </li>
            
        </ul> */}
    </>
  )
}

export default Header