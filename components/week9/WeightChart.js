import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { LineChart } from "react-native-chart-kit";
import WeightChartStorage from "../../storages/WeightChartStorage";
// import WeightChartStorage from "../../storages/WeightChartStorage";

export default function WeightChart() {
  const [weight, setWeight] = useState(0);
  const [weightHistory, setWeightHistory] = useState([10,20]);

  const load = async()=>{
    console.log("load");
    let wc = await WeightChartStorage.readItems();
    setWeightHistory(wc);
  };
  useEffect(()=>{ load(); },[]);

  // Function to add new weight to history
  const addWeight = () => {
    console.log("CLICK");
    let wh = [...weightHistory, weight];
    setWeightHistory(wh);
    setWeight(0); // Reset input field after adding

    WeightChartStorage.writeItems(wh);
  };
  const reset = () => {
    console.log("CLICK");
    let wh = [10,20];
    setWeightHistory(wh);
    setWeight(0); // Reset input field after adding
    
    WeightChartStorage.writeItems(wh);
  };
  console.log(weight, weightHistory);

  // Function to format chart data labels (optional)
  const formatChartData = () => {
    return weightHistory.map((weight, index) => ({ x: index + 1, y: weight }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Weight (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setWeight(parseFloat(text))}
        value={weight.toString()}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add Weight" onPress={addWeight} style={styles.button} />
        <View style={{ marginVertical : 5}}></View>
        <Button title="Reset" onPress={reset} style={styles.button} />
         
      </View>
      {weightHistory.length > 0 && (
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Weight History</Text>
          <LineChart
            data={{
              labels: formatChartData().map((item) => item.x),
              datasets: [{ data: formatChartData().map((item) => item.y) }],
            }}
            // width={styles.chart.width}
            // height={styles.chart.height}
            width={400}
            height={100}
            yAxisLabel="(kg) "
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
          />
        </View>
      )}
    </View>
  );
}

const chartConfig = {
  backgroundColor: "#fff",
  backgroundGradientFrom: "#fff",
  backgroundGradientTo: "#fff",
  decimalPlaces: 1, // Display weight with one decimal place
  color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  chartContainer: {
    marginTop: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chart: {
    width: "500",
    height: "500",
    marginVertical: 10,
    padding: 10,
    borderRadius: 16,
  },
});