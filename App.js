import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Hello from './Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput 
        value="Hello"
        style={styles.input}
        />
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
    padding: 20,
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 5,
  }
});
