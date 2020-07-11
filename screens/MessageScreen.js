import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class MessageScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> MessageScreen screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
