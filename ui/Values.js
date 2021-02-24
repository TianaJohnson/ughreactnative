import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

const Values = ({ tipPercent, bill}) => {

    let tip = 0.0;
    let total = 0.00;
    if (bill) {
      tip = parseFloat(bill) * tipPercent;
      total = parseFloat(bill) * tip;
      tip = (Math.round(tip * 100) / 100).toFixed(2);
      total = (Math.round(tip * 100) / 100).toFixed(2);
    }

    return (
        <View style={styles.values}>
            <Text>
                Tip Amount
            </Text>
             <Text>
                 ${tip}
             </Text>
             <Text>
                 Total Bill
             </Text>
             <Text>
                 ${total}
             </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    values: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#484848',
        width: 100%,
    }
})

export default Values;