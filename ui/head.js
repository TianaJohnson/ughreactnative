import React, { Component } from "react";
import { StyleSheet, StatusBar, Platform, View } from "react-native";
import {
  Header,
  Left,
  Body,
  Title,
  Right,
} from "native-base";

export default class Head extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    header: {
      ...Platform.select({
        ios: {
          marginTop: StatusBar.currentHeight,
          backgroundColor: '#fc5e03',
        },
      }),
    }
});