import React, { useEffect, useState } from 'react'
import { key } from '../key'
import { useParams } from 'react-router-dom'
import Forms from '../routes/Forms'
import Profile from './Profile'


const NumberResult = () => {

  const [userInput, setUserInput] = useState()

  let {number} = useParams()

  const [numberInfo, setNumberInfo] = useState()

  const phoneNumberDetail = async () => {
    
    const data = await fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=${key}&phone=1${number}`);
    const details = await data.json();
    setNumberInfo(details);
    console.log(numberInfo)

  }

  useEffect(() => {
    
    phoneNumberDetail()
  
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
    </>
  )
}

export default NumberResult