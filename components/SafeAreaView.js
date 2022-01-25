import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

const SafeAreaView = () => {
  return <View style={styles.SafeArea}/>;
};

const styles = StyleSheet.create({
  SafeArea: {
    paddingTop: statusBarHeight,
  },
});

export default SafeAreaView;
