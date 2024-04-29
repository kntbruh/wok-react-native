import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const wokItemInfo = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: "Details " + id }} />
      <Text>wokItemInfo {id}</Text>
    </View>
  );
};

export default wokItemInfo;
