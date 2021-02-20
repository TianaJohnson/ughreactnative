import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,
         Text,
         View,
         TextInput,
         Button,
         } from 'react-native';

import Hello from './Hello';

export default class App extends React.Component {

  constructor () {
    super();
      this.state = {
        inputValue: '',
        tip: 0.2,
      }
  }

render() {

  let tip = 0.00;
  if(this.state.inputValue) {
    tip = parseFloat(this.state.inputValue) * this.state.tip;
    tip = (Math.round(tip * 100) / 100).toFixed(2);
  }


  return (
    <View style={styles.container}>
      <Text>
        ${tip}
      </Text>
      
      <TextInput 
        value={this.state.inputValue} //this is what makes it a controled input
        style={styles.input}
        keyboardType="numeric"
        placeholder="0.00"
        onChangeText={(text) => this.setState({inputValue: text})}
        />
        <View style={styles.buttonGroup}>
          <Button
            title="10%"
            onPress={() => this.setState({ tip: 0.1 })}
           />
           <Button
            title="20%"
            onPress={() => this.setState({ tip: 0.2 })}
           />
           <Button
            title="25%"
            onPress={() => this.setState({ tip: 0.25 })}
           />
        </View>
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
  },
  buttonGroup: {
    flexDirection: 'row'
  }

});
