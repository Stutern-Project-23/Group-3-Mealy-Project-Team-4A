import React from "react";
import "../styles/cartmodal.css";
import CartPageImage from "../images/cart-page-image.png";
import CloseWindowIcon from "../images/close-window.svg";
import { useSelector, useDispatch } from "react-redux";
import ReactModal from "react-modal";
import {
  addToCart,
  decrementQuantity,
  displayedCartModal,
  incrementQuantity,
  zeroQuantity,
} from "../redux/slices/newCartSlice";

const CartModal = () => {
  const { isCartModalOpen, selectedMenuItem, quantity } = useSelector(
    (state) => state.newCart
  );
  const dispatch = useDispatch();

  function closeCartModal() {
    dispatch(displayedCartModal("closeCartModal"));
    dispatch(zeroQuantity());
  }

  const handleDecrease = () => {
    dispatch(decrementQuantity());
  };

  const handleIncrease = () => {
    dispatch(incrementQuantity());
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart({item}));
    dispatch(displayedCartModal("closeCartModal"));
    dispatch(zeroQuantity());
  };

  return (
    <>
      <ReactModal
        isOpen={isCartModalOpen}
        onRequestClose={closeCartModal}
        overlayClassName='overlay-cart'
        className='cart-modal'
      >
        <div className='cart-window cart-modal-content-container'>
          <img
            src={CloseWindowIcon}
            alt='close-window-icon'
            className='close-icon_cart'
            onClick={closeCartModal}
          />
          <img src={CartPageImage} alt='breakfast' className='cart-modal-img' />
          <div className='cart-modal-content'>
            <h3> {selectedMenuItem?.type}</h3>
            <p className='food-description'>{selectedMenuItem?.description}</p>
            <p className='price'>$ {selectedMenuItem?.price}</p>
            <div className='order-quantity-add-to-cart-container'>
              <div className='order-quantity-container'>
                <button className='btn decrease-order' onClick={handleDecrease}>
                  -
                </button>
                <p className='quantity'>{quantity}</p>
                <button className='btn increase-order' onClick={handleIncrease}>
                  +
                </button>
              </div>
              <button
                className='add-to-cart'
                onClick={() => handleAddToCart(selectedMenuItem)}
              >
                add to cart
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default CartModal;
