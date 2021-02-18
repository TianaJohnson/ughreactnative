import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Hello from './Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    backgroundColor: '#ff00ff',
    height: 100,
    width: 100,
  },
  view2: {
    backgroundColor: '#00ffff',
    height: 100,
    width: 100,
  }
});
