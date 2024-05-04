import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {  
    const[count,setCount]=useState(0)
    const [color,setColor]=useState("orange")
   
 

    return (
 
        <View
          style={{
             marginVertical:10,
            borderRadius: 10,
            height: 50,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
            flexDirection:"row",
            justifyContent:"space-around"
          }}
        >
           
          <TouchableOpacity onPress={() =>{ setCount(count + 1); setColor("red")}}>
          <FontAwesome name="heart" size={30} color={color} />
          </TouchableOpacity>
          <Text style={{  fontSize:30 }}>{count}</Text>
         
        </View>
   
    );
}