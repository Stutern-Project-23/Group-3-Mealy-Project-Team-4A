import React from 'react'
import "../styles/homepagenav.css"
import unAuthProfile from "../images/unAuthProfileIcon.svg"
import enter  from "../images/enter.svg"
import { useDispatch, useSelector } from 'react-redux'
import { toggled } from '../redux/slices/authSlice'

function LoginToolTip() {
    const{toggleLoginTip}=useSelector((state)=>state.auth)
    const dispatch=useDispatch()
    function toggleSignup() {
      dispatch(toggled('signup'));
  
    }
  return (
    toggleLoginTip &&
    
    <div className='login-tip' onClick={toggleSignup}>

        <img src={unAuthProfile}  alt='unathurized profile icon'  className="unAuthprofile-icon_2 "/>
        <p>Log in</p>
        <img src={enter} className='enter' alt='enter icon'/>
    </div>
    
  )
}

export default LoginToolTip