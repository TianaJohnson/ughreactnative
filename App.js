import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Hello from './Hello';

export default class App extends React.Component {

  constructor () {
    super();
    this.state = {
      inputValue: '',
    }
  }

render() {
  return (
    <View style={styles.container}>
      <Text>
        {this.state.inputValue && parseFloat(this.state.inputValue)}
      </Text>
      
      <TextInput 
        value={this.state.inputValue} //this is what makes it a controled input
        style={styles.input}
        keyboardType="numeric"
        placeholder="0.00"
        onChangeText={(text) => this.setState({inputValue: text})}
        />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
