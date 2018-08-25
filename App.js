import React, { Component } from 'react';
import {
  View
} from 'react-native';
import AppRouter from './app/Router';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppRouter />
      </View>
    );
  }
}
