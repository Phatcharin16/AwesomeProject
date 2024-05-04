import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Signup from "../../components/week3/Signup";
import Menu from "../../components/week3/Menu";
import Card from "../../components/week3/Card";
import Hotel from "../../components/week3/Hotel";

export default function Travel() {
  return (
    <ScrollView>
           <View style={{ flex: 1, paddingTop: 50 }}>
      {/* <Text> Week 3 </Text> */}
      <Menu />
      <Card />
      <Hotel />
      <Signup />
    </View>

    </ScrollView>
 
  );
}