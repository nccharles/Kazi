import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading} from 'expo';
import { Asset} from 'expo-asset';
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
        require('./app/Assets/images/icon.png'),
        require('./app/Assets/images/splash.png'),
        require('./app/Assets/images/user-add.png'),
        require('./app/Assets/images/map.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        ...Icon.Entypo.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'font-regulary': require('./app/Assets/fonts/SabonLTStd-Roman.otf'),
        'font-bold': require('./app/Assets/fonts/SabonLTStd-Bold.otf'),
        'font-italic': require('./app/Assets/fonts/SabonLTStd-Italic.otf'),
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
