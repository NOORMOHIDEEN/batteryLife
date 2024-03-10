import * as React from "react";
import { View, Text } from "react-native";
import { useState, useEffect } from "react";
// import { LineChart, XAxis, YAxis } from 'react-native-svg-charts';
// import { BezierLineChart } from 'react-native-svg-charts';

import {MonthlyChargeTimeGraph} from "./Graph";
import { ValueData } from "./ValueData";
export default function DashBoard({ navigation }) {    
  return (
    <View>
        
        <Text
        style={{
          textAlign: "center",
          marginTop: "3%",          
          fontSize: 24,          
          fontWeight:900
        }}
      >
        Battery</Text>
        <View >
      <Text style={{
        marginLeft:'8%',
        marginTop:"8%",
        fontSize:16,
        fontWeight:600
        
        }}>State Of Health</Text>

        <Text style={{
        marginLeft:'8%',
        marginTop:"1%",
        fontSize:36,
        fontWeight:600,        
        }}>92%</Text>

    <Text style={{
        marginLeft:'8%',
        marginTop:"1%",
        fontSize:16,
        fontWeight:600
        }}>Status:<Text style={{
            color:'green',
            fontSize:20,
            fontWeight:600,
            
            }}> Good </Text></Text>
        </View>
        <MonthlyChargeTimeGraph/>
      <ValueData/>
    </View>
  );
}
