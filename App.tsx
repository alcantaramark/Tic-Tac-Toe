import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { useTicTacToe } from './Hooks';

export default function App() {
  const boxes = useRef<Array<React.RefObject<Image>>>(new Array(9));
  const [] = useTicTacToe(boxes)
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.gridContainer}>
        <View style={styles.gridRow}>
            <View style={styles.gridItem}>
                <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[0]} />
            </View>
            <View style={styles.gridItem}>
                <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[1]}/>
            </View>
            <View style={styles.gridItem}>
                <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[2]}/>
            </View>
        </View>
        <View style={styles.gridRow}>
            <View style={styles.gridItem}>
                <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[3]}/>
            </View>
            <View style={styles.gridItem}>
                <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[4]}/>
            </View>
            <View style={styles.gridItem}>
                <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[5]}/>
            </View>
        </View>
        <View style={styles.gridRow}>
            <View style={styles.gridItem}>
                <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[6]}/>
            </View>
            <View style={styles.gridItem}>
                <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[7]}/>
            </View>
            <View style={styles.gridItem}>
                <Image source={require('./assets/logo.png')} style={styles.image} ref={boxes.current[8]}/>
            </View>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
   flexDirection: 'column',
   alignItems: 'center'
  },
  gridRow: {
   flexDirection: 'row'
  },
  gridItem: {
   width: 150,
   height: 150,
   borderWidth: 1,
   alignItems: 'center',
   justifyContent: 'center'
  },
  image: {
   width: 150,
   height: 150
  }
});
