import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./Slices/productsSlice";
import cartSlice from "./Slices/cartSlice";
import authSlice from "./Slices/authSlice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer
  }
});

export default store;
