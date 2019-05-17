import React from 'react';
import { createAppContainer,createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import Introduction from '../Welcome/Welcome';


const AppNavigator = createSwitchNavigator(
    {
      IntroScreen:{
        screen: Introduction,
      },
      TabScreen: {
        screen: MainTabNavigator
      },
    }
  );
  const AppContainer = createAppContainer(AppNavigator);
  export default AppContainer;