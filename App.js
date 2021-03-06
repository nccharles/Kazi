import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font'
import * as Icon from '@expo/vector-icons'
import AppNav from './app/index.js'
import Colors from './app/constants/Colors.js';
import GeneralStatusBarColor from './app/components/StatusBar/GeneralStatusBarColor.js';
import * as firebase from 'firebase'
import APIKeys from './app/constants/APIKeys.js';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    // initial firebase
    if (!firebase.apps.length) { firebase.initializeApp(APIKeys.FirebaseConfig) }
  }
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
          <GeneralStatusBarColor backgroundColor={Colors.primary} barStyle="light-content" />
          <AppNav />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/icon.png'),
        require('./assets/images/splash.png'),
        require('./assets/images/user-add.png'),
        require('./assets/images/profile-bg.jpg'),
        require('./assets/images/map.png'),
        require('./assets/images/job-search.jpg')
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        ...Icon.Entypo.font,
        ...Icon.MaterialIcons.font,
        ...Icon.MaterialCommunityIcons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'font-regulary': require('./assets/fonts/Oxygen.otf'),
        'font-bold': require('./assets/fonts/Oxygen-Bold.otf'),
        'font-italic': require('./assets/fonts/Oxygen-Italic.otf'),
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
  },
});
