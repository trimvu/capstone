import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { signUp } from '../../actions/index'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    
    e.preventDefault();

    dispatch(signUp({email, password}, () => {
      navigate('/')
    }))
  }

  return (
    <>
      Signup

      <h1>Register for an Account</h1> 

      <form onSubmit={handleSubmit}>

        <div>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your e-mail address" />
        </div>

        <div>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter a password' />
        </div>

        <div>
          <input type="submit" />
        </div>
        
      </form>

      <p>Click here if you already have an account <Link to="/signIn" >Log In</Link></p>
    </>
  )
}

export default Signup