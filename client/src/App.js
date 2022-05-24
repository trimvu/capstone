import React, { useState, useEffect } from 'react'
import { key } from './key'
import { useNavigate } from 'react-router-dom'


// const API_URL = "https://app.abstractapi.com?apikey=2417dbbd171a49679efbd660158987cf";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submittedPhoneNumber, setSubmittedPhoneNumber] = useState("");
  const [scamData, setScamData] = useState("");
  const [input, setInput] = useState("")

  const navigate = useNavigate()


  useEffect(() => {
    
    const fetchScamData = () => {
      // console.log(phoneNumber, submittedPhoneNumber)
      fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=${key}&phone=1${submittedPhoneNumber}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        // setScamData(data.setup + "..." + data.scamline);
      })
    }
    fetchScamData();
  
  }, [submittedPhoneNumber.number])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedPhoneNumber(phoneNumber)

    navigate(`/NumberResult/${phoneNumber}`)

  }

  return (
    
    <div>
      Scam Finder
      <form onSubmit={handleSubmit}>
        <input type="text" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}  />
        <input type="submit" />
    </form>

    
    {/* {scamData} */}
    {/* {phoneNumber} */}
    </div>

  )
}


export default App