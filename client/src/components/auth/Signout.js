import React from "react";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signOut } from '../../actions'

const Signout = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const logout = () => {

    dispatch(signOut(()=>{
      navigate('/')
    }))
  }

  return <div>

  <button onClick={logout} >Sign Out</button>
 </div>
};

export default Signout;
