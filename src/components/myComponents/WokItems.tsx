import { FC } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

type WokItemsProps = {
  items: {
    imageUrl: string;
    title: string;
    price: number;
  }[];
};

export const WokItems: FC<WokItemsProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.length > 0 && (
        <>
          <Image source={{ uri: items[0]?.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{items[0]?.title}</Text>
          <Text style={styles.title}>{items[0]?.price + " р"}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  price: {},
  image: { width: "100%", aspectRatio: 1 },
});
