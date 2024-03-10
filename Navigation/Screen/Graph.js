import React from 'react';
import { View } from 'react-native';
import { LineChart, XAxis, YAxis } from 'react-native-svg-charts';


export function MonthlyChargeTimeGraph() {
  // Sample data (replace with your actual data)
  const data = [
    { month: 'Jan', percentage: 100 },
    { month: 'Feb', percentage: 98 },
    { month: 'Mar', percentage: 98 },
    { month: 'Apr', percentage: 96 },
    { month: 'May', percentage: 95 },
    { month: 'Jun', percentage: 92 },
    
    
  ];

  // Extracting x-axis labels and y-axis data from the data array
  const xAxisData = data.map((item) => item.month);
  const yAxisData = data.map((item) => item.percentage);

  return (
    <View style={{ flexDirection: 'row', height: 300, marginLeft:20, marginRight:20 }}>
      <YAxis
        data={yAxisData}
        contentInset={{ top: 20, bottom: 20 }}
        svg={{ fontSize: 10, fill: 'green' }}
        numberOfTicks={5}
        formatLabel={(value) => `${value}%`}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <LineChart
          style={{ flex: 1 }}
          data={yAxisData}
          svg={{ stroke: '#008000' , strokeWidth: 3}}
          contentInset={{ top: 20, bottom: 20 }}
        />
        <XAxis
          style={{ marginHorizontal: -10, marginTop: 10 }}
          data={xAxisData}
          formatLabel={(index) => xAxisData[index]}
          contentInset={{ left: 20, right: 20 }}
          svg={{ fontSize: 10, fill: 'green' }}
        />
      </View>
    </View>
  );
};


