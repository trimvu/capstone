import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signIn } from '../../actions'
import { useNavigate } from 'react-router-dom'

const Signin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    dispatch(signIn({email, password}, () => {
      navigate('/')
    }))
  }
  
  return (
    <>
      Signin

      <h1>Sign In</h1>

      <form onSubmit={handleSubmit} className="form">

        <div className="form__field">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder='Please enter your registered e-mail here' />
        </div>

        <div className="form__field">
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='(☞ﾟヮﾟ)☞☜(ﾟヮﾟ☜)' />
        </div>

        <div className="form__field">
          <input type="submit" />
        </div>

      </form>

      <p>Need an account? Register here <Link to="/signup" >Register Here</Link></p>
    </>
  )
}

export default Signin