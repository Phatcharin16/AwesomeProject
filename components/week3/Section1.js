import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';
export default function Section1() {
    return (
        <View style={{ padding : 20  }}>
     
            <View style={{ flexDirection : "row" }}>
                <Image style={{ flex : 1 , resizeMode : "cover" , aspectRatio : 5/2,  }} source={require("../../assets/week3/room-6.jpg")} />
            </View>
 
      
        </View>    
    );
}