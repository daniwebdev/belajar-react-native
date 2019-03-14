import React from 'react';

import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen, LoginScreen } from "./src";

const MainNavigator = createStackNavigator({
  LoginScreen: {screen: LoginScreen},
  HomeScreen: {screen: HomeScreen}
},{
  initialRouteName: 'LoginScreen',
  headerMode: 'none'
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

