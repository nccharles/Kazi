import React from 'react';
import {
  Platform,
  Text,
  Keyboard,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Icon from '@expo/vector-icons'
import styles from './styles/style'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Colors from '../constants/Colors';
import JobScreen from './home/allJobs';
import PeopleScreen from './home/People';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    searchBarFocused: false
  }

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)


  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBit}>
          <Text style={styles.logo}>Kazi</Text>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => alert('done')} >
              <Icon.Ionicons name={Platform.OS==='ios'?'ios-search':'md-search'} color={Colors.primary} size={20} style={{ padding: 20 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Notification')} >
              <Icon.Ionicons name={Platform.OS==='ios'?'ios-notifications-outline':'md-notifications-outline'} color={Colors.primary} size={20} style={{ padding: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollableTabView
          initialPage={0}
          style={styles.tab}
          tabBarBackgroundColor={Colors.primary_white}
          tabBarActiveTextColor={Colors.primary}
          tabBarTextStyle={{ fontWeight: 'bold', fontSize: 15 }}
          tabBarUnderlineStyle={{ backgroundColor: Colors.primary}}
          tabBarInactiveTextColor={Colors.primary_gray}
        >
        <JobScreen tabLabel="Jobs   " {...this.props} />
          <PeopleScreen tabLabel="People   " {...this.props} />
        </ScrollableTabView>
      </View>
    );
  }
}
