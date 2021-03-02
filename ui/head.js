import React, { Component } from "react";
import { StyleSheet, StatusBar, Platform, View } from "react-native";
import {
  Header,
  Left,
  Body,
  Title,
  Right,
} from "native-base";

// having issues with emulatores

const Head = () => (
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

export default Head


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