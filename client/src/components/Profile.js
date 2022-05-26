import React, {useState, useEffect} from 'react'
import axios from 'axios'



const Profile = ({setUserInput}) => {
  const [localData, setLocalData] = useState(new Map())  

  const updateMap = (key, value) => {
    setLocalData(map => new Map(map.set(key, value)))
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
      
    }
  
  
  }
  
  useEffect(() => {
    displayProfileFetch()
  
    
  }, [])
  

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setUserInput(textValue)
  
  // }
  return (
  <>

    {
    localData.map(info => {
      return (
        <ul>
          <li key={info}>{info.Number} {info.Comments}</li>
        </ul>
      )
    })
    }

  </>
  )
}

export default Profile