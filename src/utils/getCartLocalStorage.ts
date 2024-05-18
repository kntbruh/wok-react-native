// import { AsyncStorage } from "@react-native-community/async-storage";
// import { CartItem } from "@/redux_TK/cartSlice";
// import { calcTotalPrice } from "./totalPrice";
// import PropTypes from "prop-types";

// export const getCartLocalStorage = () => {
//   const data = AsyncStorage.getItem("cart");
//   const items = data ? JSON.parse(data) : [];
//   const totalPrice = calcTotalPrice(items);
//   return {
//     items: items as CartItem[],
//     totalPrice,
//   };
// };
