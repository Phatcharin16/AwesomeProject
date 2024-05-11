import React from "react";
import {  View,  TextInput } from "react-native";
import MyIcon from "./MyIcon";
 

export default function Section5() {
  return (
    <View style={{   margin:10 ,borderTopColor:"gray" }}>
     
      <View style={{ flexDirection : "row", marginTop : 5,marginBottom:10  }}>
        <MyIcon title="wifi" name="wifi" size={20} color="orange" />
        <MyIcon title="coffee" name="coffee" size={20} color="orange" />
        <MyIcon title="bath" name="bath" size={20} color="orange" />
        <MyIcon title="car" name="car" size={20} color="orange" />
        <MyIcon title="paw" name="paw" size={20} color="orange" />
      </View>
       
    </View>
  );
}