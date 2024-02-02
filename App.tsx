import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTicTacToe } from './Hooks';

export default function App() {
  const [Play] = useTicTacToe();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      { Play() }
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
});
