import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Introduction from '../Welcome/Welcome';
import SignupScreen from '../screens/signup/signupScreen';
import NotificationScreen from '../screens/Notifications';
import LoginScreen from '../screens/signup/LoginScreen';
const StackNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: MainTabNavigator,
    },
    Notification: {
      screen: NotificationScreen,
    },
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });
const SignStackNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    },
    Signup: {
      screen: SignupScreen,
    },
  }, {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  })
const SwithNavigator = createSwitchNavigator(
  {
    IntroScreen: {
      screen: Introduction,
    },

    SignScreen: {
      screen: SignStackNavigator,
    },
    TabScreen: {
      screen: StackNavigator,
    },
  }
);
const AppContainer = createAppContainer(SwithNavigator);
export default AppContainer;