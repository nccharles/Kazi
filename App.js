import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset'
import * as Font from 'expo-font'
import * as Icon from '@expo/vector-icons'

import AppNav from './app/index.js'
import Colors from './app/constants/Colors.js';
import GeneralStatusBarColor from './app/components/StatusBar/GeneralStatusBarColor.js';
export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <GeneralStatusBarColor backgroundColor={Colors.primary}
      barStyle="light-content"/>
          <AppNav/>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./app/assets/images/icon.png'),
        require('./app/assets/images/splash.png'),
        require('./app/assets/images/user-add.png'),
        require('./app/assets/images/map.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        ...Icon.Entypo.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./app/assets/fonts/SpaceMono-Regular.ttf'),
        'space-mono-bold': require('./app/assets/fonts/SpaceMono-Bold.ttf'),
        'space-mono-italic': require('./app/assets/fonts/SpaceMono-Italic.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.log(error.message);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary_white,
  },
});
