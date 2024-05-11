import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import MyIcon from "./MyIcon";
export default function Section3() {
  return (
 
      <View style={{ flex: 1, margin:10}}>
        
        <View style={{ flexDirection:"row"}}>
         <View style={{ borderRadius:50,backgroundColor:"orange",padding:15}}>
            <Text style={{  fontSize:9.5,fontSize:18,color:"white"}}>9.5</Text>

         </View>
         <View >
            <Text style={{  fontSize:9.5,fontSize:16,color:"orange",padding:2}}>Excellent</Text>
            <Text style={{  fontSize:9.5,fontSize:12,padding:3}}>See 801 reviews</Text>

         </View>
      </View>
      </View>
    
  );
}