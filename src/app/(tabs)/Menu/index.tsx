import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View } from "react-native";
import axios from "axios";
import { WokItems } from "@/components/myComponents/WokItems";

export default function TabOneScreen() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("https://655251e85c69a7790329e2f4.mockapi.io/wok-data")
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка!", "Error!");
      });
  }, []);

  return (
    <FlatList
      data={items}
      renderItem={({ item }) => <WokItems item={item} />}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 5 }}
      columnWrapperStyle={{ gap: 10 }}
    />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     borderRadius: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "white",
//   },
//   price: {},
//   image: { width: "100%", aspectRatio: 1 },
// });
