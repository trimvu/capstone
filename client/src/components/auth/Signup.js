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
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder">Registration</h1>
                            <p className="lead fw-normal text-muted mb-0">Help others know when they're at risk of scams!</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">

{/* Registration */}
<form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your e-mail address" />
                  <label className="form-label" for="form3Example3cg">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter a password' />
                  <label className="form-label" for="form3Example4cg">Password</label>
                </div>

                {/* <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label" for="form2Example3g">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div> */}

        <div>
          <input type="submit" />
        </div>

                {/* <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div> */}

                <p className="text-center text-muted mt-5 mb-0">Already have an account? <Link to="/signin" ><a className="fw-bold text-body"><u>Login here</u></a></Link></p>
</form>
                            </div>
                        </div>
                    </div>


    </>
  )
}

export default Signup