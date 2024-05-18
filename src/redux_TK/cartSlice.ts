import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { calcTotalPrice } from '../utils/totalPrice';

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
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log('cant remove the item');
      }
      state.items = newCart;
    },
    clearCart: (state, action: PayloadAction<CartItem>) => {
      state.items = [];
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id);
export const cartTotal = (state: any) =>
  state.cart.items.reduce(
    (total: number, item: any) => ((total = total + item.price), 0)
  );

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
