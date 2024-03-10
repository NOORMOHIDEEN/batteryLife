import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import RangeMeter from "./RangeMater";

export default function HomeScreen({ navigation }) {
  const [progress,setProgress]=React.useState(0.92);
  const [temp,setTemp]=React.useState("70F");
  const [humidity, setHumidity] = React.useState(56);
  const [weather,setWeather]=React.useState("Sunny");
  const [chargeRate,setChargeRate]=React.useState(30);
  return (
    <View style={{backgroundColor:'#F3F8FF'}}>
      <View style={styles.settings}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="account" size={24} color="white" />
          </View>
        </View>
      <View style={{ marginTop: "25%" }}>
      
      </View>
      <View style={styles.container}>
        <Text
          style={{
            textAlign: "center",
            marginTop: "3%",
            marginLeft: "5%",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          Tesla Model S
        </Text>
        
        <RangeMeter progress={progress} />
        <Text style={styles.charge}>
          {" "}
          Your car is charged at a rate of {chargeRate} miles per hour.
        </Text>
        <Text style={styles.climate}>Climate & Weather</Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        />
        <Text style={styles.lineItem}>
          Temperature
          <Text style={{ fontWeight: "600" }}>    {temp}</Text>
        </Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        />
        <Text style={styles.lineItem}>
          Humidity
          <Text style={{ fontWeight: "600" }}>           {humidity}%</Text>
        </Text>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "gray",
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        />
        <Text style={styles.lineItem}>
          Weather
          <Text style={{ fontWeight: "600" }}>            {weather}</Text>
        </Text>
      </View>
      <View style={{padding:'20%'}}>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  // ...
  settings: {
    position: "absolute",
    right: 10,
    top: -47,
    zIndex: 1,    
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "gray",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  charge: {
    marginTop: "10%",
    marginLeft: 20,
    fontSize: 16,
  },
  climate: {
    marginTop: "10%",
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 40,
  },
  lineItem: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 16,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F3F8FF",
  },
});
