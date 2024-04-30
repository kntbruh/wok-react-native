import {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import axios from "axios";
import { Alert } from "react-native";

interface Wok {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  price: number;
  sizes: number[];
  rating: number;
  quantity: number;
}

interface CartContextType {
  items: Wok[];
  onAddItem: (item: Wok) => void;
}

const CartContext = createContext<CartContextType>({
  items: [],
  onAddItem: () => {},
});

const CartProvider = ({ children }: PropsWithChildren) => {
  const [items, setItems] = useState<Wok[]>([]);

  const onAddItem = (item: Wok) => {
    const newCartItem: Wok = {
      ...item,
      quantity: 1,
    };
    setItems([newCartItem, ...items]);
  };

  // useEffect(() => {
  //   axios
  //     .get("https://655251e85c69a7790329e2f4.mockapi.io/wok-data")
  //     .then(({ data }) => {
  //       setItems(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       Alert.alert("Ошибка!", "Error!");
  //     });
  // }, []);

  return (
    <CartContext.Provider value={{ items, onAddItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
