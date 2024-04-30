import {
  View,
  Text,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import Button from "@/components/myComponents/Button";
import { AntDesign } from "@expo/vector-icons";
import { fetchWoks, selectWok } from "@/redux_TK/wokSlice";
import { useAppDispatch } from "@/redux_TK/store";
import { useSelector } from "react-redux";

const wokItemInfo = () => {
  const { id } = useLocalSearchParams();
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectWok);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [sizes, setSizes] = useState<number[]>([]);

  useEffect(() => {
    dispatch(fetchWoks({}));
  }, [dispatch]);

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }

  const woks = items.find((w) => w.id.toString() === id);

  const handleSizeSelect = (size: number) => {
    setSelectedSize(size);
  };
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: woks?.title }} />
      <Image style={styles.image} source={{ uri: woks?.imageUrl }} />
      <View style={styles.infoContainer}>
        <Text style={styles.description}>{woks?.description}</Text>
        <Text style={styles.price}>Цена: {woks?.price + "₽"}</Text>
      </View>
      <View style={styles.sizeContainer}>
        {woks?.sizes.map((size: number, index: number) => (
          <TouchableOpacity
            onPress={() => handleSizeSelect(size)}
            key={index}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "lightgray" : "white",
              },
            ]}
          >
            <Text style={styles.textSize}>{size}гр</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.ratingView}>
          <Text style={styles.rating}>{woks?.rating}</Text>
          <AntDesign name="star" size={24} color="yellow" />
        </View>
      </View>
      <Button text="Добавить в корзину" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    paddingHorizontal: 16,
    flex: 1,
  },
  infoContainer: { paddingVertical: 5 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },
  description: { paddingVertical: 5, fontSize: 16, color: "yellow" },
  price: {
    color: "green",
    fontSize: 20,
  },
  image: { width: "100%", height: "50%" },
  sizeContainer: { gap: 10, flexDirection: "row", padding: 10 },
  size: {
    backgroundColor: "lightgray",
    width: 50,
    aspectRatio: 1,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  textSize: { fontSize: 15, fontWeight: "bold" },
  ratingView: { flexDirection: "row", alignItems: "center" },
  rating: { fontSize: 20, fontWeight: "bold", color: "yellow" },
});

export default wokItemInfo;
