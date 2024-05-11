import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props) {    

    const tours = [
        { "id": "1", "title": "Tour in London", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { "id": "2", "title": "Tour in Paris", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg"  },
        { "id": "3", "title": "Tour in Italy", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg"  },
        { "id": "4", "title": "Tour in Portugal", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg"  },
        { "id": "5", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
    ];
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try{
            let result = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await result.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineTours(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    } ;

    //เหมือน oninit
    useEffect(() => {
        loadOnlineTours();
    }, []);
    
    return (
        <View style={props.style}>
               <View style={props.style}>
        <Text style={{   }}>Up Coming Evenst</Text>
        <Text style={{ color:"gray",fontSize:10 }} >What The Worst Could Happend</Text>
        <FlatList
            horizontal={true}
            // data={tours}
            data={ onlineTours }
            renderItem={
                ({ item, index }) => {
                    console.log(item, index, item.uri);
                    return (
                        <View style={{margin:1}}>
                             <Image style={{ width:250, height :150, borderRadius:10 }} source={{ uri : item.uri}} />
                            <View style={{ marginTop : -30, height : 70 , width: 250, paddingHorizontal : 10,backgroundColor: 'lightyellow' , borderBottomLeftRadius : 10 , borderBottomRightRadius : 10 ,borderColor:"gray",borderWidth:1}}>
                               <View style={{flexDirection:"row",justifyContent:"space-between" }}>
                                    <View style={{flexDirection:"column",alignItems:"center"}}>
                                    <Text style={{ fontSize:16,color:"red" }}>{item.month}</Text>
                                    <Text style={{ fontSize:14 }}>{item.date}</Text>
                                    <Text style={{ fontSize:20 }}></Text>
                                    </View>
                                    <View  style={{flexDirection:"column"}}>
                                    <Text style={{ fontSize:16 }}>{item.title}</Text>
                                    <Text style={{ fontSize:14,color:"gray" }}>{item.datetime}</Text>
                                    <Text style={{ fontSize:14 ,color:"gray"}}>{item.place}</Text>
                                    </View>
                               </View>

                               
                            </View>  
                        </View>
                        //  <TourItem item={item} index={index} />
                    );
                }
            }
            keyExtractor={item => item.id}
        />
    </View>
        </View>
    );
}