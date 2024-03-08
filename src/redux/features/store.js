import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice";
import wishlistReducer from "../features/wishlist/wishlistSlice";
import filterReducer from "../features/filter/filterSlice";
import userReducer from "../features/user/userSlice";
import orderReducer from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    filter: filterReducer,
    order: orderReducer,
    user: userReducer,
  },
});
