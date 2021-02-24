import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const Values = ({ tipPercent, bill}) => {

    let tip = 0.0;
    if (bill) {
      tip = parseFloat(bill) * tipPercent;
      tip = (Math.round(tip * 100) / 100).toFixed(2);
    }

    return (
        <View>
             <Text>${tip}</Text>
        </View>
    )
};

export default Values;