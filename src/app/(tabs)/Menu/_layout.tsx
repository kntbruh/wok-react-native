import { FontAwesome } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function MenuLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Menu",
          headerRight: () => (
            <Link href="/Cart" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="shopping-cart"
                    size={25}
                    color={"black"}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
