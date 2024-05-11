import React from 'react';
import { Image, Text, View } from 'react-native';

export default function Section7() {
    return (
        <View style={{ padding : 20  }}>
            <View style={{padding:3}}>
                <Text  >Room Type</Text>
            </View>
           
            <View style={{ flexDirection: "row"  }}>
                <Image style={{ width: 80, height: 80, borderRadius: 20 / 2 }} source={require("../../assets/week3/room-1.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 16 }}>Standard Twin Room</Text>
                    <Text style={{ fontSize: 18,paddingTop:10,color:"red" }}>$399.99 </Text>
                    <Text style={{ color: "blue" }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
     
        </View>    
    );
}