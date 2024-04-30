import { View, Text, Platform } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import { useCart } from "./providers/CartProvider";

const Cart = () => {
  const { items } = useCart();
  return (
    <View>
      <Text style={{ color: "red" }}>{items?.length}</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
};

export default Cart;
