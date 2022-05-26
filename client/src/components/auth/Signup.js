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
                    <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div class="text-center mb-5">
                            <h1 class="fw-bolder">Registration</h1>
                            <p class="lead fw-normal text-muted mb-0">Help others know when they're at risk of scams!</p>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-8 col-xl-6">

{/* Registration */}
<form onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your e-mail address" />
                  <label class="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter a password' />
                  <label class="form-label" for="form3Example4cg">Password</label>
                </div>

                {/* <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div> */}

        <div>
          <input type="submit" />
        </div>

                {/* <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div> */}

                <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    class="fw-bold text-body"><u>Login here</u></a></p>
</form>
                            </div>
                        </div>
                    </div>


    </>
  )
}

export default Signup