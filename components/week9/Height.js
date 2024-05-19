import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import HeightStorage from "../../storages/HeightStorage";
// import HeightStorage from "../../storages/HeightStorage";
// import AgeStorage from "../../storages/AgeStorage";

export default function Height() {
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);

  const load = async()=>{
    console.log("load");
    let h = await HeightStorage.readItem();
    setHeight(h);
    // let a = await AgeStorage.readItem();
    // setAge(a);

    // console.log(h,a);
  };

  useEffect(()=>{ load(); },[]);

  const save = async()=>{    
    console.log("save");
    HeightStorage.writeItem(height);
    // AgeStorage.writeItem(age);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Details</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height (cm):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setHeight(parseFloat(text))}
          value={height.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(text) => setAge(parseInt(text))}
          value={age.toString()}
        />
      </View>

        <Button title="Save" onPress={ save } style={styles.button} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    flex: 1,
  },
  displayContainer: {
    marginTop: 20,
  },
  displayText: {
    fontSize: 18,
    marginBottom: 5,
  },
});