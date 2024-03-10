import { View,Text,StyleSheet,ProgressBarAndroid } from "react-native";

// The react native component which has the estimated range for battery level with the range in bar from left to right with percentage
export default function RangeMeter({ progress }){    
    return(
        <View>
            <View>
            <Text style={styles.data}>Estimated range left</Text>
            <Text style={styles.percent}>{progress*100}%</Text>            
            </View>
            <View style={styles.container}>            
            <View style={[styles.progressBar, { width: `${progress * 100}%` },{backgroundColor:(progress*100)>70?'#008000':(progress*100)>40?'yellow':'red'}]}/>
            </View>
            <Text style={styles.value}>{((progress*100)/100)*200} miles / 200 miles</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    // ...
    data: {
      position: 'relative',
      left:20,
      top: 30,
      fontSize: 16,      
    },
    percent:{
        position:'absolute',
        top:30,
        right:20,
        fontSize:16
    },
    value: {        
        position: 'relative',
        left:20,
        top: 10,
        fontSize: 16, 
      },
    bar:{
        transform: [{ scaleX: 50.0 }, { scaleY: 50.0 }], // Adjust the height to increase the thickness
        borderRadius: 10, // Optional: for rounded corners
        overflow: 'hidden',
      },
      container: {
        height: 10, // Set the height of the progress bar
        backgroundColor: '#f2f2f2', // Background color of the progress bar
        borderRadius: 5, // Optional: for rounded corners
        overflow: 'hidden',
        marginLeft:20, 
        marginRight:20,
        marginTop:40
      },
      progressBar: {
        height: '100%', // Make the progress bar fill the container height
        backgroundColor: '#008000', // Color of the progress bar
      },
    
  });
        