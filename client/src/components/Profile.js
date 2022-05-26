import React, {useState, useEffect} from 'react'
import axios from 'axios'



const Profile = ({setUserInput}) => {
  const [localData, setLocalData] = useState([])  


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

    {
    localData.map(info => {
      return (
        <ul>
          <li key={info.id}>{info.Number} {info.Comments}</li>
        </ul>
      )
    })
    }

  </>
  )
}

export default Profile