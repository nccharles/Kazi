import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Introduction from '../Welcome/Welcome';
import SignupScreen from '../screens/signupScreen';
import NotificationScreen from '../screens/Notifications';
const StackNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: MainTabNavigator,
    },
    Notification: {
      screen: NotificationScreen,
    },
  },{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  });
const SwithNavigator = createSwitchNavigator(
  {
    IntroScreen: {
      screen: Introduction,
    },
    SignScreen: {
      screen: SignupScreen,
    },
    TabScreen: {
      screen: StackNavigator,
    },
  }
);
const AppContainer = createAppContainer(SwithNavigator);
export default AppContainer;