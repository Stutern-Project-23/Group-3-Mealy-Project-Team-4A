import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import add from "../../images/add.png";
import minus from "../../images/minus.png";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/slices/cartSlice";
import { NavLink, } from "react-router-dom";

const Cart = () => {
  // const {id}=useParams()
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const {cartItems} = useSelector((state) => state.cart);

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrementQuantity = (itemId) => {
    dispatch(incrementQuantity(itemId));
  };

  const handleDecrementQuantity = (itemId) => {
    dispatch(decrementQuantity(itemId));
  };
 

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const desiredHeight =450 /* specify the desired height where the position should change */;

      setIsScrolled(scrollHeight > desiredHeight);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
      <div className={`cart-wrapper ${isScrolled ? 'scrolled-cart' : ''}`}>
        <h1>Your Cart</h1>


        {cartItems.length === 0 ? (
          <p>Nothing added yet</p>
        ) : (
          <div>
            {cartItems.map((cartItem) => (
            
                <div className='cart-row' key={cartItem.id}>
            
                  <img src={cartItem.img} alt='cartimage' />
                  <div className='cart-desc'>
                    <h5>{cartItem.type}</h5>
                    <p>${cartItem.price}</p>
                  </div>
                  <div className='counter'>
                    <img
                      src={minus}
                      alt=''
                      onClick={() => handleDecrementQuantity(cartItem.id)}
                    />
                    <span> {cartItem.quantity} </span>
                    <img
                      src={add}
                      alt=''
                      onClick={() => handleIncrementQuantity(cartItem.id)}
                    />
                  </div>
                  <button onClick={() => handleRemoveFromCart(cartItem.id)} className="remove">
                    Remove
                  </button>
                </div>
            ))}
            <NavLink to="checkout"><button>Checkout</button></NavLink>
          </div>
        )}
      </div>
  );
};

export default Cart;
