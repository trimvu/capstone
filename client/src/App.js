import React, { useState, useEffect } from 'react'


// const API_URL = "https://app.abstractapi.com?apikey=2417dbbd171a49679efbd660158987cf";

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [submittedPhoneNumber, setSubmittedPhoneNumber] = useState("");
  const [scamData, setScamData] = useState("");


  useEffect(() => {
    
    const fetchScamData = () => {
      console.log(phoneNumber, submittedPhoneNumber)
      fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=2417dbbd171a49679efbd660158987cf&phone=1${submittedPhoneNumber}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // setScamData(data.setup + "..." + data.scamline);
      })
    }
    fetchScamData();
  
  }, [submittedPhoneNumber])

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedPhoneNumber(phoneNumber)
  }

  return (
    
    <div>
      Scam Finder
      <form onSubmit={handleSubmit}>
        <input type="text" value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} />
        <input type="submit" />
    </form>

    
    {/* {scamData} */}
    {/* {phoneNumber} */}
    </div>

  )
}


export default App