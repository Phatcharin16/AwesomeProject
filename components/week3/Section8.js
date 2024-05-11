import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Button, Image, Text, View } from "react-native";
export default function Section8() {
  return (
    <View style={{flexDirection:"row" , justifyContent: "space-between",padding: 20,borderBottomWidth:1,borderBlockColor:"gray" }}>
 
      <View style={{flexDirection: "column",marginTop: 10 }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 12 }}>Price</Text>
          <Text style={{ fontSize: 20, color: "red" }}>$399.99</Text>
          <Text style={{ fontSize: 12 }}>AVG/Night</Text>
        </View>
      
      </View>

      <View style={{ marginTop: 25,padding:10 }}>
        <Button title="Book Now" onPress={() => Alert.alert("Simple Button pressed")}
          color="red"
        />
      </View>
    </View>
  );
}