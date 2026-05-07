import { createSlice } from "@reduxjs/toolkit";

// ✅ Load from localStorage
const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const initialState = {
  cartItems: loadCart()
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {

    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (p) => p.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, action) => {
      const item = state.cartItems.find(
        (p) => p.id === action.payload
      );

      if (item) {
        item.quantity -= 1;

        if (item.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (p) => p.id !== action.payload
          );
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem("cart");
    }
  }
});

export const { addToCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;