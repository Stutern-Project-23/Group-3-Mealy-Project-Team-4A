import { createSlice } from "@reduxjs/toolkit";

const newCartSlice = createSlice({
  name: "cart",
  initialState: {
    isCartModalOpen: false,
    quantity: 0,
    selectedMenuItem: null,
    items: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const { item } = action.payload;
      if (state.selectedMenuItem) {
        const { id, type, img, price } = state.selectedMenuItem;
        const newItem = { id, type, img, price, quantity: state.quantity };
        const existingItem = state.items.findIndex((i) => i.id === item.id);
        if (existingItem !== -1) {
          state.items[existingItem].quantity += state.quantity;
        } else {
          state.items.push(newItem);
        }      
        state.totalPrice += state.quantity * parseInt(price.replace(/,/g, ''), 10);
      }
    },
    updateCartItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const itemIndex = state.items.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        const { price } = state.items[itemIndex];
        const previousQuantity = state.items[itemIndex].quantity;
        state.totalPrice -= previousQuantity * parseInt(price.replace(/,/g, ''), 10);
        state.items[itemIndex].quantity = quantity;
        state.totalPrice += quantity * parseInt(price.replace(/,/g, ''), 10);
      }
    },
    setSelectedMenuItem(state, action) {
      state.selectedMenuItem = action.payload;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find((item) => item.id === itemId);
      if (item) {
        const { price, quantity } = item;
        state.totalPrice -= parseInt(price.replace(/,/g, ''), 10) * quantity;
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
    displayedCartModal(state, action) {
      state.isCartModalOpen = action.payload === "openCartModal";
    },
    incrementQuantity(state) {
      state.quantity += 1;
    },
    decrementQuantity(state) {
      if (state.quantity > 0) {
        state.quantity -= 1;
      }
    },
    zeroQuantity(state) {
      state.quantity = 0;
    },
  },
});

export const {
  displayedCartModal,
  incrementQuantity,
  decrementQuantity,
  addToCart,
  removeFromCart,
  setSelectedMenuItem,
  clearCart,
  zeroQuantity,
  updateCartItemQuantity,
} = newCartSlice.actions;

export default newCartSlice.reducer;