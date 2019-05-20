import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon} from 'expo';
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
}
