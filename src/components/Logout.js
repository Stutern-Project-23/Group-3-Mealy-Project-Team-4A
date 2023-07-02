import React from 'react'
import '../styles/logout.css'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { Loggedout, Profile} from '../redux/slices/profileSlice'
import logoutImg from "../images/logoutImg.svg"
import { NavLink } from 'react-router-dom'
function Logout() {
  const {displayLogout}=useSelector((state)=>state.profile)
  const dispatch=useDispatch()
  function closeLogout(){
    dispatch(Loggedout('closeLogout'))
  }
  function resetPage(){
    dispatch(Loggedout('closeLogout'))
    dispatch(Profile('closeProfile'))

  }
  return (
    <ReactModal 
    overlayClassName="overlay overlay_dark" 
    isOpen={displayLogout} 
    className='logout-section'>

   
    <img src={logoutImg} alt='logout logo'/>
    <p className='logout-confirm'>Oh No! You’re leaving.....<span>
Are you sure?</span></p>
<button className='logout-btn logout-btn_no' onClick={closeLogout}>Naah, Just Kidding</button>

<button className='logout-btn logout-btn_yes'onClick={resetPage}>
<NavLink to="/" className='logout-link'>
<p >Yes, Log Me Out</p>
</NavLink>
</button>
    </ReactModal>
  )
}

export default Logout