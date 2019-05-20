import React from 'react';
import { View } from 'react-native';
import Colors from '../constants/Colors';

export default class SettingsScreen extends React.Component {
  static navigationOptions =()=> {
    let Title = 'Profile'
        return {
            headerTitle: Title,
            headerStyle: {
                backgroundColor: Colors.primary_blue,
            },

            headerTintColor: '#fff',
            headerTitleStyle: {
                fontFamily: 'space-mono-bold',
            },
        }
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <View/>;
  }
}
