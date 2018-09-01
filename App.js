import React, { Component } from 'react';
import {
  View,
  UIManager
} from 'react-native';
import AppRouter from './app/Router';

export default class App extends Component {

  constructor() {
    super()
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppRouter />
      </View>
    );
  }
}
