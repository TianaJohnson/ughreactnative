// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { Container, Content } from "native-base";

import Head from "./ui/Head";
import Values from "./ui/Values";

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
        <Head />
        <View style={styles.container}>
          <Content style={{ width: "100%" }}>
            <Values tipPercent={this.state.tip} bill={this.state.inputValue} />
            <View style={styles.inputs}>
            <TextInput
              value={this.state.inputValue} //this is what makes it a controled input
              style={styles.input}
              keyboardType="numeric"
              placeholder="0.00"
              underlineColorAndroid="#FFF"
              placeholderTextColor="#FFF"
              onChangeText={(text) => this.setState({ inputValue: text })}
            />
            <View style={styles.buttonGroup}>
              <Button title="10%" onPress={() => this.setState({ tip: 0.1 })} />
              <Button title="20%" onPress={() => this.setState({ tip: 0.2 })} />
              <Button
                title="25%"
                onPress={() => this.setState({ tip: 0.25 })}
              />
              <TextInput
                style={styles.customTip}
                value={(this.state.tip * 100).toString()}
                keyboardType="numeric"
                onChangeText={(customTip) => this.updateCustomTip(customTip)}
              />
            </View>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    height: '100%',
    width: '100%',
  },
  inputs: {
    backgroundColor: '#212121',
    padding: 20,
  },
  input: {
    height: 40,
    width: "100%",
    padding: 5,
    color: '#FFF'
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  customTip: {
    height: 40,
    width: 60,
    padding: 5,
  },
});
