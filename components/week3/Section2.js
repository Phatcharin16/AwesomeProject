import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
export default function Section2() {
  return (
 
      <View  style={{ flexDirection: "flex", marginTop:-45,margin:30 , backgroundColor : "white",borderRadius : 20,shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      
      elevation: 5,}}  >
        <View style={{borderColor : 'gray'}} >
          <Text style={{ fontSize: 20 ,textAlign: "center" }}>Hilton San Francisco</Text>
        </View>
        <View style={{ flexDirection: "row",justifyContent:"center",  }}>
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star-half" size={20} color="orange" />
        </View>

        <View style>
          <Text style={{ fontSize: 16, color: "gray",textAlign: "center" }}>Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
        </View>

      </View>
    
  );
}