import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
// export type AppDispatch = typeof appStore.dispatch;
// export type RootState = ReturnType<typeof appStore.getState>;
