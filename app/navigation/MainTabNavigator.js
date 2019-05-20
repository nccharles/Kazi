import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from "../components/TabBar/TabBarIcon"
import TabBar from "../components/TabBar/TabBar"
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/mapScreen';
import ChatsScreen from '../screens/ChatsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Jobs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="suitcase"
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
      name="chat"
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
      name="globe"
    />
  ),
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="user"
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ChatsStack,
  MapStack,
  ProfileStack,
},
  {
    tabBarComponent: TabBar,
  }
);
