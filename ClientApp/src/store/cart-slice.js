import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  },
  reducers: {
    addItem: (state, { payload }) => {
      console.log(payload);
      if (state.cart.length === 0) {
        state.cart.push(payload);
      } else {
        if (state.cart.find((item) => item.product.id === payload.product.id)) {
          state.cart = state.cart.map((item) =>
            item.product.id === payload.product.id
              ? {
                  product: item.product,
                  quantity: (item.quantity += 1),
                }
              : item
          );
        } else {
          state.cart.push(payload);
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    fetchCart: (state) => {
      state.cart = JSON.parse(localStorage.getItem("cart"))
        ? JSON.parse(localStorage.getItem("cart"))
        : [];
      console.log(state.cart);
    },
  },
});

export const { addItem, fetchCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.cart;

export default cartSlice.reducer;
