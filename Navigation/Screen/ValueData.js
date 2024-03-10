// display voltage value , current value, and temperature value
import * as React from "react";
import { View, Text, StyleSheet  } from "react-native";

export function ValueData() {
    
    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.value}>12.5V</Text>
            <Text style={styles.label}>Voltage</Text>
            <Text style={styles.value}>3A</Text>
            <Text style={styles.label}>Cranking Amps</Text>
            <Text style={styles.value}>48°C</Text>
            <Text style={styles.label}>Temperature</Text>       

        </View> 
        <View style={{position:'absolute', bottom:-10,left:215}} >
            <Text style={styles.data}>13.5V</Text>
            <Text style={styles.data}>800A</Text>
            <Text style={styles.data}>72 degrees Fahrenheit</Text>
        </View>
        </View>
        );
    }
    const styles = StyleSheet.create({
        container: {
          alignItems: 'left',
          marginTop: 20,
          marginLeft: '8%',
          float:'left',
          position:'relative'
        },
        value: {
          fontSize: 20,
          fontWeight:'600'
          
        },
        label: {
          fontSize: 16,
          marginTop: 5,
          marginBottom: 5,
          color: '#008000'
        },
        data:{
            fontSize:16,
            marginBottom:40,
            alignSelf: 'flex-end'
        }
      });