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
{/* <!-- TOP INFO BANNER--> */}
<header className="py-5">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-xxl-6">
                            <div className="text-center my-5">
                                <h1 className="fw-bolder mb-3">Nobody deserves to be scammed out of their hard-earned money.</h1>
                                <p className="lead fw-normal text-muted mb-4">Everyone has to deal with unwanted calls from scammers. Eff those guys...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

{/* <!-- Contact form--> */}
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder">Sign In</h1>
                            <p className="lead fw-normal text-muted mb-0">Help others know when they're at risk of scams!</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">

{/* Sign In */}
<form onSubmit={handleSubmit} className="form">
                  <div className="form-outline mb-4 form__field">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" value={email} onChange={e => setEmail(e.target.value)} placeholder='Please enter your registered e-mail here' />
                  <label className="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4 form__field">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Password' />
                  <label className="form-label" for="form3Example4cg">Password</label>
                </div>

                {/* <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div> */}

        <div className="form__field">
          <input type="submit" />
        </div>

                {/* <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div> */}

                {/* <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p> */}
</form>
<p>Need an account? Register here <Link to="/signup" >Register Here</Link></p>
                            </div>
                        </div>
                    </div>
    </>
  )
}

export default Signin