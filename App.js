// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TextInput, Button} from "react-native";
import { Container, Content} from "native-base";

import Head from './ui/Head';
import Values from './ui/Values';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      tip: 0.2,
    };
  }

  updateCustomTip(customTip) {


    if (customTip) {
      this.setState({
        tip: parseFloat(customTip) / 100,
      });
    } else {
      this.setState({ tip: 0 });
    }
  }



  render() {
   

    return (
      <Container>
        <Head/>
        <Content >
        <View style={styles.container}>

         <Values 
          tipPercent={this.state.tip}
          bill={this.state.inputValue}
          />

          <TextInput
            value={this.state.inputValue} //this is what makes it a controled input
            style={styles.input}
            keyboardType="numeric"
            placeholder="0.00"
            onChangeText={(text) => this.setState({ inputValue: text })}
          />
          <View style={styles.buttonGroup}>
            <Button title="10%" onPress={() => this.setState({ tip: 0.1 })} />
            <Button title="20%" onPress={() => this.setState({ tip: 0.2 })} />
            <Button title="25%" onPress={() => this.setState({ tip: 0.25 })} />
            <TextInput
              style={styles.customTip}
              value={(this.state.tip * 100).toString()}
              keyboardType="numeric"
              onChangeText={(customTip) => this.updateCustomTip(customTip)}
            />
          </View>
        </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#333",
    borderWidth: 1,
    padding: 5,
  },
  buttonGroup: {
    flexDirection: "row",
  },
  customTip: {
    height: 30,
    width: 60,
    borderColor: "#333",
    borderWidth: 1,
    padding: 5,
  },
  
});
