import { FC } from "react";
import { StyleSheet, Text, Pressable, Image } from "react-native";
import { Link } from "expo-router";

type WokItemsProps = {
  item: {
    id: string;
    imageUrl: string;
    title: string;
    price: number;
  };
};

export const WokItems: FC<WokItemsProps> = ({ item }) => {
  return (
    <Link
      href={{ pathname: "/(tabs)/Menu/[id]", params: { id: item.id } }}
      asChild
    >
      <Pressable style={styles.container}>
        <Image
          source={{ uri: item.imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price + " ₽"}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  price: {
    color: "green",
  },
  image: { width: "100%", aspectRatio: 1 },
});
