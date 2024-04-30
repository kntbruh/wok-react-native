import { configureStore } from "@reduxjs/toolkit";
import wokReducer from "./wokSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    wok: wokReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
