import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../actions'
import { useSelector } from 'react-redux'



const Profile = ({setUserInput}) => {
  const [localData, setLocalData] = useState([])  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector((state) => state.email)
  console.log(email)

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
      console.log(data)
      setLocalData(data.data)
      
    } catch (error) {
      console.log(error)
    }
  
  
  }
  
  useEffect(() => {
    displayProfileFetch()
  
    
  }, [])
  

  const handleSubmit = (e) => {
      e.preventDefault();
      // setUserInput(textValue)
  
  }
  return (

  <>

{/* HEADER INFO BANNER*/}
        <header class="py-5 bg-light border-bottom mb-4">
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">Profile</h1>
                    <p class="lead mb-0">Information for <b><b>{email}</b></b></p>
                </div>
            </div>
        </header>  

{/* ---------------------------------------------------------------------------- */}

{/* <!-- Page Content--> */}
        <section class="pt-4">
            <div class="container px-lg-5">

{/* <!-- Page Features--> */}
{/* SEC ONE */}
                <div class="row gx-lg-5">
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-collection"></i></div>
                                <h2 class="fs-4 fw-bold">1111111111</h2>
                                <p class="mb-0">Comment comment comment Comment comment comment </p>
                            </div>
                        </div>
                    </div>
{/* SEC TWO */}
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-cloud-download"></i></div>
                                <h2 class="fs-4 fw-bold">2222222222</h2>
                                <p class="mb-0">Comment comment comment Comment comment comment </p>
                            </div>
                        </div>
                    </div>
{/* SEC THREE */}
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-card-heading"></i></div>
                                <h2 class="fs-4 fw-bold">3333333333</h2>
                                <p class="mb-0">Comment comment comment Comment comment comment </p>
                            </div>
                        </div>
                    </div>
{/* SEC FOUR */}
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-bootstrap"></i></div>
                                <h2 class="fs-4 fw-bold">4444444444</h2>
                                <p class="mb-0">Comment comment comment Comment comment comment </p>
                            </div>
                        </div>
                    </div>
{/* SEC FIVE */}
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-code"></i></div>
                                <h2 class="fs-4 fw-bold">5555555555</h2>
                                <p class="mb-0">Comment comment comment Comment comment comment </p>
                            </div>
                        </div>
                    </div>
{/* SEC SIX */}
                    <div class="col-lg-6 col-xxl-4 mb-5">
                        <div class="card bg-light border-0 h-100">
                            <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-patch-check"></i></div>
                                <h2 class="fs-4 fw-bold">6666666666</h2>
                                <p class="mb-0">Comment comment comment Comment comment comment </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

{/* ------------------------------------------------------------------------- */}

{/* ORIGINAL CODE BEFORE STYLING */}

    <button onClick={logout} >Sign Out</button>

    {
        localData.map(info => {
            return (
                <section class="pt-4">
                    <div class="container px-lg-5">
                        <div class="row gx-lg-5">
                            <div class="col-lg-6 col-xxl-4 mb-5">
                                <div class="card bg-light border-0 h-100">
                                    <div class="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                        <div class="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i class="bi bi-patch-check"></i></div>
                                        <h2 class="fs-4 fw-bold">{info.Number}</h2>
                                        <p class="mb-0">{info.Comments} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        })
    }

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