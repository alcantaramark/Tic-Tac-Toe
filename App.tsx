import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Pressable, Text, Alert, Platform } from 'react-native';
import { useTicTacToe } from './Hooks';


export default function App() {
  const boxes = useState<Array<string>>(new Array(9).map((item) => item = './assets/logo.png'));
  const [CurrentGameState, TurnBox, Winner, StartNewGame] = useTicTacToe();
  
  
  if (Winner === 'X') {
    if (Platform.OS === 'ios'){
      Alert.alert('Winner', 'Player X wins');
    }
    else {
      alert('Player X wins');
      StartNewGame();
    }
  }

  if (Winner === 'O') {
    if (Platform.OS === 'ios'){
      alert('Winner', 'Player O wins');
    }
    else {
      alert('Player O wins');
      StartNewGame();
    }
  }

  if (Winner === 'Draw') {
    if (Platform.OS === 'ios'){
      Alert.alert('Winner', 'It is a draw');
    }
    else {
      alert('It\'s a draw');
      StartNewGame();
    }
  }

  const buildPlayArea = () => {
    return(
      <View style={styles.gridContainer}>
        <View style={styles.gridRow}>
          <View style={styles.gridItem} >
            <Pressable onPress={() => TurnBox(1)}>
                <Image style={styles.image} source={CurrentGameState.get(1) == '' ? require('./assets/logo.png')
                  : CurrentGameState.get(1) === 'X' ? require('./assets/X.jpeg') : require('./assets/O.jpeg')} />
            </Pressable> 
          </View>
          <View style={styles.gridItem} >
            <Pressable onPress={() => TurnBox(2)}>
                <Image style={styles.image} source={CurrentGameState.get(2) == '' ? require('./assets/logo.png')
                  : CurrentGameState.get(2) === 'X' ? require('./assets/X.jpeg') : require('./assets/O.jpeg')} />
            </Pressable> 
          </View>
          <View style={styles.gridItem} >
            <Pressable onPress={() => TurnBox(3)}>
                <Image style={styles.image} source={CurrentGameState.get(3) == '' ? require('./assets/logo.png')
                  : CurrentGameState.get(3) === 'X' ? require('./assets/X.jpeg') : require('./assets/O.jpeg')} />
            </Pressable> 
          </View>
        </View>
        <View style={styles.gridRow}>
          <View style={styles.gridItem} >
            <Pressable onPress={() => TurnBox(4)}>
                <Image style={styles.image} source={CurrentGameState.get(4) == '' ? require('./assets/logo.png')
                  : CurrentGameState.get(4) === 'X' ? require('./assets/X.jpeg') : require('./assets/O.jpeg')} />
            </Pressable> 
          </View>
          <View style={styles.gridItem} >
            <Pressable onPress={() => TurnBox(5)}>
                <Image style={styles.image} source={CurrentGameState.get(5) == '' ? require('./assets/logo.png')
                  : CurrentGameState.get(5) === 'X' ? require('./assets/X.jpeg') : require('./assets/O.jpeg')} />
            </Pressable> 
          </View>
          <View style={styles.gridItem} >
            <Pressable onPress={() => TurnBox(6)}>
                <Image style={styles.image} source={CurrentGameState.get(6) == '' ? require('./assets/logo.png')
                  : CurrentGameState.get(6) === 'X' ? require('./assets/X.jpeg') : require('./assets/O.jpeg')} />
            </Pressable> 
          </View>
        </View>
        <View style={styles.gridRow}>
          <View style={styles.gridItem} >
            <Pressable onPress={() => TurnBox(7)}>
                <Image style={styles.image} source={CurrentGameState.get(7) == '' ? require('./assets/logo.png')
                  : CurrentGameState.get(7) === 'X' ? require('./assets/X.jpeg') : require('./assets/O.jpeg')} />
            </Pressable> 
          </View>
          <View style={styles.gridItem} >
            <Pressable onPress={() => TurnBox(8)}>
                <Image style={styles.image} source={CurrentGameState.get(8) == '' ? require('./assets/logo.png')
                  : CurrentGameState.get(8) === 'X' ? require('./assets/X.jpeg') : require('./assets/O.jpeg')} />
            </Pressable> 
          </View>
          <View style={styles.gridItem} >
            <Pressable onPress={() => TurnBox(9)}>
                <Image style={styles.image} source={CurrentGameState.get(9) == '' ? require('./assets/logo.png')
                  : CurrentGameState.get(9) === 'X' ? require('./assets/X.jpeg') : require('./assets/O.jpeg')} />
            </Pressable> 
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
     { buildPlayArea() }
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
