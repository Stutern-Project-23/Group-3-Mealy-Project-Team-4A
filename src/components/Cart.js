import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import add from "../images/add.png";
import minus from "../images/minus.png";
import { NavLink, } from "react-router-dom";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  updateCartItemQuantity,
} from  "../redux/slices/newCartSlice";


const Cart = () => {
  // const {id}=useParams()
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const {items} = useSelector((state) => state.newCart);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleDecrease = (itemId, quantity) => {
    dispatch(decrementQuantity());
    dispatch(updateCartItemQuantity({ itemId, quantity: quantity - 1 }));
  };

  const handleIncrease = (itemId, quantity) => {
    dispatch(incrementQuantity());
    dispatch(updateCartItemQuantity({ itemId, quantity: quantity + 1 }));
  };
  function addCartToLocal(){
    console.log(items)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const desiredHeight =450 /* specify the desired height where the position should change */;

      setIsScrolled(scrollHeight > desiredHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
      <div className={`cart-wrapper ${isScrolled ? 'scrolled-cart' : ''}`}>
        <h1>Your Cart</h1>


        {items.length === 0 ? (
          <p>Nothing added yet</p>
        ) : (
          <div>
            {items.map((cartItem, index) => (
            
                <div className='cart-row' key={index}>
            
                  <img src={cartItem.img} alt='cartimage' className="cart-img"/>
                 
                  <div className='cart-desc'>
                    <h5>{cartItem.type}</h5>
                    <p>${cartItem.price}</p>
                  </div>
                  <div className='counter'>
                    <img
                      src={minus}
                      alt=''
                      onClick={() => handleDecrease(cartItem.id, cartItem.quantity)}
                    />
                    <span> {cartItem.quantity} </span>
                    <img
                      src={add}
                      alt=''
                      onClick={() => handleIncrease(cartItem.id, cartItem.quantity)}
                    />
                  </div>
                  <button onClick={() => handleRemoveFromCart(cartItem.id)} className="remove">
                    Remove
                  </button>
                </div>
            ))}
            <NavLink to="checkout"><button onClick={addCartToLocal}>Checkout</button></NavLink>
          </div>
        )}
      </div>
  );
};

export default Cart;
