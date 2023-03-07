import React, { useEffect, useState } from 'react'
// import { key } from '../key'
import { useParams } from 'react-router-dom'
import Forms from '../routes/Forms'
import axios from 'axios'

const NumberResult = () => {

  const [localData, setLocalData] = useState([])  
  // const [userInput, setUserInput] = useState()
  const [numberInfo, setNumberInfo] = useState()
  const [userID, setUserID] = useState()

  let {number} = useParams()

  const phoneNumberDetail = async () => {
    
    const data = await fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_AUTH_KEY}&phone=1${number}`);
    const details = await data.json();
    // console.log(details)
    setNumberInfo(details);
    // console.log(numberInfo) 

  }
  const displayNumberFetch = async() => {
    // console.log(number)
    try {
      const data = await axios.post('/showNumber', {
        number
      })
        
      // console.log(data)
      setLocalData(data.data)
      
    } catch (error) {
      console.log(error);
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
      setUserID(data.data[0].id)
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    
    phoneNumberDetail()

    displayNumberFetch()

    displayEmail()

  }, [])
  

  return (
    <>

      {
        numberInfo === undefined
        ?
        ''
        :
        <div>
          <header className="py-5 bg-light border-bottom mb-4">
              <div className="container">
                  <div className="text-center my-5">
                      <h1 className="fw-bolder">{numberInfo.format.local}</h1>
                      <p className="lead mb-0">Carrier: {numberInfo.carrier}</p>                
                      <p className="lead mb-0">State: {numberInfo.location}</p>                
                      <p className="lead mb-0">Type of Line: {numberInfo.type}</p>                
                  </div>
              </div>
          </header>
        </div>
      }

      <div> 

      <Forms userID={userID} />
      
      </div>


  

    {/* {
    localData.map(info => {
      return (
        <ul>
          <li key={info.id}>Is this number a scam?: {info.isScam.toString()}
          <br /> Comment: {info.Comments}</li>
        </ul>
      )
    })
    } */}

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
                                        <h2 className="fs-4 fw-bold">Is this number a scam?: {info.isScam.toString()}</h2>
                                        <p className="mb-0">Comment: {info.Comments} </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        })
    }

  </>
  

  )
}

export default NumberResult