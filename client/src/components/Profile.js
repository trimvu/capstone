import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../actions'
// import { useSelector } from 'react-redux'



const Profile = ({setUserInput}) => {
  const [localData, setLocalData] = useState([])
  const [email, setEmail] = useState()  

  const navigate = useNavigate();
  const dispatch = useDispatch();

//   const email = useSelector((state) => state.email)
//   console.log(email)

  const logout = () => {

    dispatch(signOut(()=>{
      navigate('/')
    }))
  }


  // const [textValue, setTextValue] = useState("")
  const displayProfileFetch = async() => {
    try {
      const data = await axios.get('/getNumsById', {
        headers: {
          "authorization": localStorage.token
          
        }
      })
    //   console.log("display data", data)
      setLocalData(data.data)
      
    } catch (error) {
      console.log(error)
    }
  
  
  }

  const displayEmail = async() => {
    try {
        const data = await axios.get('/profileEmail', {
            headers: {
                "authorization": localStorage.token
            }
        })
        // console.log("the email data", data)
        setEmail(data.data[0].email)
    } catch (error) {
        console.log(error)
    }
  }
  
  useEffect(() => {
    displayProfileFetch()
  
    displayEmail()
  }, [])
  

  const handleSubmit = (e) => {
      e.preventDefault();
      // setUserInput(textValue)
  
  }
  return (

  <>

{/* HEADER INFO BANNER*/}
        <header className="py-5 bg-light border-bottom mb-4">
            <div className="container">
                <div className="text-center my-5">
                    <h1 className="fw-bolder">Profile</h1>
                    <p className="lead mb-0">Information for <b><b>{email}</b></b></p>                
                </div>
            </div>

            <div className="d-flex justify-content-center">
                  <button onClick={logout} >Sign Out.</button>
            </div>
        </header>  


{/* ---------------------------------------------------------------------------- */}

{/* <!-- Page Content--> */}
        <section className="pt-4">
            <div className="container px-lg-5">

{/* <!-- Page Features--> */}
{/* SEC ONE */}
                <div className="row gx-lg-5">
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        {/* <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection"></i></div>
                                <h2 className="fs-4 fw-bold">1111111111</h2>
                                <p className="mb-0">Comment comment comment Comment comment comment </p>
                            </div>
                        </div> */}
                    </div>
{/* SEC TWO */}
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        {/* <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download"></i></div>
                                <h2 className="fs-4 fw-bold">2222222222</h2>
                                <p className="mb-0">Comment comment comment Comment comment comment </p>
                            </div>
                        </div> */}
                    </div>
{/* SEC THREE */}
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        {/* <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-card-heading"></i></div>
                                <h2 className="fs-4 fw-bold">3333333333</h2>
                                <p className="mb-0">Comment comment comment Comment comment comment </p>
                            </div>
                        </div> */}
                    </div>
{/* SEC FOUR */}
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        {/* <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-bootstrap"></i></div>
                                <h2 className="fs-4 fw-bold">4444444444</h2>
                                <p className="mb-0">Comment comment comment Comment comment comment </p>
                            </div>
                        </div> */}
                    </div>
{/* SEC FIVE */}
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        {/* <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-code"></i></div>
                                <h2 className="fs-4 fw-bold">5555555555</h2>
                                <p className="mb-0">Comment comment comment Comment comment comment </p>
                            </div>
                        </div> */}
                    </div>
{/* SEC SIX */}
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        {/* <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-patch-check"></i></div>
                                <h2 className="fs-4 fw-bold">6666666666</h2>
                                <p className="mb-0">Comment comment comment Comment comment comment </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>


    {
        localData.map(info => {
            return (
                <section className="pt-4">
                    <div className="container px-lg-5">
                        <div className="d-flex justify-content-center row gx-lg-5">
                            <div className="col-lg-6 col-xxl-4 mb-5">
                                <div className="card bg-light border-0 h-100">
                                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-patch-check"></i></div>
                                        <h2 className="fs-4 fw-bold">{info.Number}</h2>
                                        <p className="mb-0">{info.Comments} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        })
    }

{/* ------------------------------------------------------------------------- */}

{/* ORIGINAL CODE BEFORE STYLING */}

    {/* {
    localData.map(info => {
      return (
        <ul>
          <li key={info.id}>{info.Number} {info.Comments}</li>
        </ul>
      )
    })
    } */}
    

  </>

  )
}

export default Profile