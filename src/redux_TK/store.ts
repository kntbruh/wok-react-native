import { configureStore } from "@reduxjs/toolkit";
import wokReducer from "./wokSlice";
import cartReducer from "./cartSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    wok: wokReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
