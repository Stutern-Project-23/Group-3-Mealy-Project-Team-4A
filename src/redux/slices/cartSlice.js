import { createSlice } from '@reduxjs/toolkit';
const initialState={
  cartItems:[],
  isCartModalOpen:false,
  isChatModalOpen:false
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, type, price, img } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ id, type, price, quantity: 1, img });
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems=state.cartItems.filter((item) => item.id !== itemId);
    },
    incrementQuantity: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);

      if (cartItem) {
        cartItem.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);

      if (cartItem) {
        if (cartItem.quantity === 1) {
          state.cartItems.filter((item) => item.id !== itemId);
        } else {
          cartItem.quantity -= 1;
        }
      }
    },
    displayedCartModal:(state,action)=>{
      if(action.payload==="openCartModal"){
        state.isCartModalOpen=true
      }
      if(action.payload==="closeCartModal"){
        state.isCartModalOpen=false
      }
    }
  },
  displayedChatModal:(state,action)=>{
    if(action.payload==="openChatModal"){
      state.isChatModalOpen=true
    }
    if(action.payload==="closeChatModal"){
      state.isChatModalOpen=false
    }
  }
});

export const { addToCart,displayedChatModal, removeFromCart,displayedCartModal, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;
