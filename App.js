import React, { Component } from "react";
import { Platform, StyleSheet, UIManager, View, StatusBar } from "react-native";
import Router from "./Router";
import { ifIphoneX } from "react-native-iphone-x-helper";



export default class App extends Component {
  constructor() {
    super();
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
   
  }
  render() {
    return (
      <View style={styles.container}>
        <Router />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    ...ifIphoneX(
      {
        paddingTop: 20,
       
      },
      {
       
      }
    )
  }
});
