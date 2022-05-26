import React, { useEffect, useState } from 'react'
import { key } from '../key'
import { useParams } from 'react-router-dom'
import Forms from '../routes/Forms'
import Profile from './Profile'
import axios from 'axios'

const NumberResult = () => {
  const [localData, setLocalData] = useState({})  

  const [userInput, setUserInput] = useState()

  let {number} = useParams()

  const [numberInfo, setNumberInfo] = useState()

  const phoneNumberDetail = async () => {
    
    const data = await fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=${key}&phone=1${number}`);
    const details = await data.json();
    setNumberInfo(details);
    console.log(numberInfo)

  }
  const displayNumberFetch = async() => {
    try {
      const data = await axios.get('/showNumber')
        
      console.log(data)
      setLocalData(data.data)
      
    } catch (error) {
      
    }
  
  
  }
  useEffect(() => {
    
    phoneNumberDetail()

    displayNumberFetch()

  }, [])
  

  return (
    <>
    
      {
        numberInfo === undefined
        ?
        ''
        :
        <p>
        <p>
          {numberInfo.format.local}
        </p>
          <p>{numberInfo.carrier}</p>
        <p>{numberInfo.location}</p>
        <p>{numberInfo.type}</p>
      </p>
      }

      <div> 

      <Forms setUserInput={setUserInput}/>
    </div>


  

    {
    localData.map(info => {
      return (
        <ul>
          <li key={info.id}>{info.isScam} {info.Comments}</li>
        </ul>
      )
    })
    }

  </>
  

  )
}

export default NumberResult