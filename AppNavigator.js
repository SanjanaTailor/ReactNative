import { createStackNavigator } from 'react-navigation-stack'
import Login from './src/Login';
import Fruits from './src/Fruits';
import FruitZoom from './src/FruitZoom';
import {createAppContainer } from 'react-navigation';
import React from 'react';

const AppNavigator = createStackNavigator({
  Login: { screen:Login},
  Fruits: { screen: Fruits},
  FruitZoom: { screen: FruitZoom}
}, {
  initialRouteName: 'Login',
  headerMode: 'none'
});

const Apps = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
      return <Apps />;
  }
}