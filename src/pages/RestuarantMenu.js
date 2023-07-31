import React, { useState } from "react";
import "../styles/RestuarantMenu.css";

import Pancake from "../images/pancake.png";
import Star from "../images/star.png";
import Search from "../images/search.png";
import Menus from "../utilities/Menu";
import Cart from "../components/Cart";
import { useDispatch, useSelector } from "react-redux";
// import { addToCart } from "../../redux/slices/cartSlice";
import LiveChat from "../components/LiveChat";
import CartModal from "../modals/CartModal";
import {
  displayedCartModal,
  decrementQuantity,
  incrementQuantity,
  addToCart,
  setSelectedMenuItem,
} from "../redux/slices/newCartSlice";

const RestuarantMenu = () => {
  const { selectedMenuItem } = useSelector((state) => state.cart);
  return (
    <div className='menu-card'>
      <div className='breadCrumb '>
        <img src={Pancake} alt='pancake' />
      </div>
      <div className='page-container'>
        <div className='menu-highlight'>
          <div className='menu-title'>
            <h1>Breakfast Hub</h1>
            <p>Good food to start your day right</p>
            <div className='rating'>
              <span>
                <img src={Star} alt='unknonw' />
                <img src={Star} alt='unknown' />
                <img src={Star} alt='unknown' />
                <img src={Star} alt='unknown' />
              </span>
              <span className='rating-stats'>4.6 Excellent (70+)</span>
            </div>
            <div className='search'>
              <input type='text' placeholder='Search menu items' />
              <img src={Search} alt='' />
            </div>
            <Tab />
          </div>
        </div>
        <Cart selectedMenuItem={selectedMenuItem} />
      </div>
      <LiveChat />
      {/* <CartModal /> */}
    </div>
  );
};
const Tab = () => {
  const dispatch = useDispatch();
  const {quantity} = useSelector(
    (state) => state.cart
  );
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const categories = ["All", ...new Set(Menus.map((menu) => menu.category))];
  const filteredMenus =
    activeTab === 0
      ? Menus
      : Menus.filter((menu) => menu.category === categories[activeTab]);

  const handleAddToCart = (menuItem) => {
    dispatch(addToCart(menuItem));
    dispatch(displayedCartModal("closeCartModal"));
  };
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [isModalOpen] = useState(false);

  const openCartModal = (menu) => {
    dispatch(setSelectedMenuItem(menu));
    dispatch(displayedCartModal("openCartModal"));
    // dispatch(displayedChatModal("openChatModal"));
  };
  const handleDecrease = () => {
    dispatch(decrementQuantity());
  };

  const handleIncrease = () => {
    dispatch(incrementQuantity());
  };
  return (
    <>
      <div>
        <div className='category'>
          {categories.map((category, index) => (
            <div
              key={index}
              className={` ${index === activeTab ? "activeTab" : ""}`}
              onClick={() => handleTabClick(index)}
            >
              {category}
            </div>
          ))}
        </div>
        <div>
          {filteredMenus.map((menu, index) => (
            <div
              className='menu-box'
              key={index}
              onClick={() => openCartModal(menu)}
            >
              <div>
                <h2>{menu.type}</h2>
                <p>{menu.description}</p>
                <p className='price'>$ {menu.price}</p>
                {isModalOpen && selectedMenu && (
                  <CartModal
                    handleAddToCart={handleAddToCart}
                    closeModal={() => setSelectedMenu(null)}
                    handleDecrease={handleDecrease}
                    handleIncrease={handleIncrease}
                    quantity={quantity}
                  />
                )}
              </div>
              <img src={menu.img} alt='' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default RestuarantMenu;
