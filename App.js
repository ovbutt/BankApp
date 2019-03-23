import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import BecomeClient from "./src/screens/BecomeClient";
import Landing from "./src/screens/Landing";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import OverView from "./src/screens/OverView";
import Deposits from "./src/screens/Deposits";
import Calculate from "./src/screens/Calculate";
import LocationScreen from "./src/screens/Location";
import DepositList from "./src/screens/DepositList";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
const LoginStack = createStackNavigator(
  {
    Landing: Landing,
    Login: Login,
    BecomeClient: BecomeClient,
    Home: Home,
    Overview: OverView,
    Deposits: Deposits,
    Calculate: Calculate,
    Location: LocationScreen,
    DepositList: DepositList
  },
  {
    defaultNavigationOptions: {
      header: null,
      gesturesEnabled: true
    }
  }
);
const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: LoginStack
  },
  {
    defaultNavigationOptions: {
      header: null,
      gesturesEnabled: true
    }
  }
);
const AppContainer = createAppContainer(AppDrawerNavigator);
