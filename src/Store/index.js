import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./Slices/productsSlice";
import { cartReducer } from "./Slices/cartSlice";
import authSlice from "./Slices/authSlice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    auth: authSlice.reducer,
    cart: cartReducer,
  }
});

export default store;
