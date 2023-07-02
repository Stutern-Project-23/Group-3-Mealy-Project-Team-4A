import React from 'react'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { Order } from '../redux/slices/orderSlice'
import "../styles/yourOrders.css"

function YourOrders() {
    const {displayOrder}=useSelector((state)=>state.order)
    const dispatch=useDispatch()
    function closeOrder(){
        dispatch(Order('closeOrder'))
    }
  return (
    <ReactModal isOpen={displayOrder} overlayClassName="overlay" onRequestClose={closeOrder} className='order-container'>
    <div>YourOrders</div>
    </ReactModal>

  )
}

export default YourOrders