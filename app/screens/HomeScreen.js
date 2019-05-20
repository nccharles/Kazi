import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon,WebBrowser } from 'expo';
import styles from './styles/style'
import { MonoText } from '../components/StyledText';
import Colors from '../constants/Colors';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.topBit}>
        <Text style={styles.logo}>Jobs</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>alert('done')} >
            <Icon.Entypo name="briefcase" color={Colors.primary_white} size={23} style={{ padding: 20 }} />
          </TouchableOpacity>

        </View>
      </View>
          <View style={styles.welcomeContainer}>
          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>HomeScreen</MonoText>
          </View>
          </View>
      </ScrollView>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}
