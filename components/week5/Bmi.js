import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FontAwesome } from "@expo/vector-icons";

export default function Bmi() {
    const [weight, setWeight] = useState('70');
    const [height, setHeight] = useState('170');
    const [bmi, setBmi] = useState('0');
    const [color, setColor] = useState('white');
    const [bmiDescription, setBmiDescription] = useState('');

    console.log("STATE : ", weight, height, bmi);

    const onPressButton = () => {
        // console.log("Calculate button is pressed!!!");
        // let output = (weight / (height / 100 * height / 100));
        // setBmi(output.toFixed(2));
        // console.log(bmi);		//Print ค่าเก่าออกมา
        // console.log(output);		//Print ค่าใหม่ออกมา
        let output = weight / ((height / 100) * (height / 100));
        let bmiValue = output.toFixed(2);
        setBmi(bmiValue);

        let description = "";
        if (output < 18.5) {
            description = "Underweight - eat a bagel!";
            setColor('#330066');
        } else if (output >= 18.5 && output <= 24.99) {
            description = "Normal - keep it up!";
            setColor('#009999');
        } else if (output >= 25 && output <= 29.99) {
            description = "Overweight - exercise more!";
            setColor('#FF7F50');
        } else if (output >= 30 && output <= 37.99) {
            description = "Obese - get off the couch!";
            setColor('#FF4500');
        } else if (output >= 38 && output <= 49.99) {
            description = "Extremely Obese - get off the couch!";
            setColor('#B22222');
        } else {
            description = "Morbidly Obese - take action!";
            setColor('purple');
        }

        setBmiDescription(description);

    };

    return (
        <View>
            {/* แถวที่ 1 */}
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <Text style={{ fontSize: 20 }}>Weight (kg.)</Text>
                <TextInput style={{ fontSize: 20 }} placeholder="Input your weight" keyboardType="numeric"
                    value={weight} onChangeText={(newWeight) => setWeight(newWeight)} />
            </View>
            {/* แถวที่ 2 */}
            <View style={{ backgroundColor: "white", padding: 20, borderRadius: 10, height: 100, justifyContent: "space-around", marginTop: 20 }}>
                <Text style={{ fontSize: 20 }} >Height (cm.)</Text>
                <TextInput style={{ fontSize: 20 }} placeholder="Input your height" keyboardType="numeric"
                    value={height} onChangeText={(newHeight) => setHeight(newHeight)} />
            </View>
            {/* แถวที่ 3 */}
            <View style={{ flexDirection: "row", marginVertical: 20 }} >
                <View style={{ backgroundColor: "white", flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginRight: 10 }}>
                    <Text style={{ fontSize: 20 }}>BMI : {bmi}</Text>
                </View>
                <View style={{ backgroundColor: color, flex: 1, borderRadius: 10, height: 100, justifyContent: "center", alignItems: "center", marginLeft: 10 }} >
                    <Text style={{ fontSize: 20 }}>{bmiDescription}</Text>
                </View>
            </View>
            {/* แถวที่ 4 */}
            {/* <Button title="Calculate" onPress={ onPressButton } /> */}
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}