import React from "react";
import { View, TextInput, Text, Image } from "react-native";
import MyIcon from "./MyIcon";

export default function Section6() {
  return (
    <View style={{ flexDirection: "", marginTop: 5, margin: 10 }}>
      <Text style={{ fontSize: 16 }}>Location</Text>
      <Text>
        218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor
        incididunt ut labore et…
      </Text>
      <View>
        <Image
          style={{ flex: 1, resizeMode: "cover", aspectRatio: 5 / 2 }}
          source={require("../../assets/week3/map.jpg")}
        />
      </View>
    </View>
  );
}