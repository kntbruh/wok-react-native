import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type?: string;
  size?: number;
  count?: number;
};

interface CartSliceState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartSliceState = {
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items = [...state.items, action.payload];
      state.totalPrice += action.payload.price;
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.totalPrice -= state.items[itemIndex].price;
        state.items.splice(itemIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id);
export const cartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
