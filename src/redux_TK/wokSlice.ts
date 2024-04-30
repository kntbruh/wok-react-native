import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

type Wok = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  rating: number;
  price: number;
  sizes: number[];
  types: number[];
};

export const fetchWoks = createAsyncThunk<Wok[], Record<string, string>>(
  "wok/fetchWokStatus",
  async () => {
    // const { order, sortBy, category, search, pageValue } = params;
    const { data } = await axios.get<Wok[]>(
      `https://655251e85c69a7790329e2f4.mockapi.io/wok-data`
    );
    return data;
  }
);

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

interface WokSliceState {
  items: Wok[];
  status: Status;
}
const initialState: WokSliceState = {
  items: [],
  status: Status.LOADING,
};

export const wokSlice = createSlice({
  name: "wok",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWoks.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchWoks.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchWoks.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});

export const selectWok = (state: RootState) => state.wok;

export const { setItems } = wokSlice.actions;

export default wokSlice.reducer;
