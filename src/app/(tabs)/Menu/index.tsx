import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, View, Text } from "react-native";
import axios from "axios";
import { WokItems } from "@/components/myComponents/WokItems";
import { fetchWoks, selectWok } from "@/redux_TK/wokSlice";
import { useAppDispatch } from "@/redux_TK/store";
import { useSelector } from "react-redux";

export default function TabOneScreen() {
  const dispatch = useAppDispatch();
  // const [items, setItems] = useState<any[]>([]);
  const { items, status } = useSelector(selectWok);

  useEffect(() => {
    dispatch(fetchWoks({}));
  }, [dispatch]);

  if (status === "loading") {
    return <Text>Loading...</Text>;
  }

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
