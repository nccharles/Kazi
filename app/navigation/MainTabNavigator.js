import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from "../components/TabBar/TabBarIcon"
import TabBar from "../components/TabBar/TabBar"
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/mapScreen';
import ChatsScreen from '../screens/ChatsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Jobs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-briefcase'
          : 'md-briefcase'
      }
    />
  ),
};
const ChatsStack = createStackNavigator({
  Chats: ChatsScreen,
});

ChatsStack.navigationOptions = {
  tabBarLabel: 'Chats',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'}
    />
  ),
};
const MapStack = createStackNavigator({
  Map: MapScreen,
});

MapStack.navigationOptions = {
  tabBarLabel: 'map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ChatsStack,
  MapStack,
  SettingsStack,
},
  {
    tabBarComponent: TabBar,
  }
);
