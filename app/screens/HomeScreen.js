import React from 'react';
import {
  ScrollView,
  Platform,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Keyboard,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'expo';
import styles from './styles/style'
import { data } from '../data/joblist';
import * as Animatable from 'react-native-animatable'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import Colors from '../constants/Colors';
import JobScreen from './home/allJobs';
import FavoriteScreen from './home/Favorite';
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
          <Text style={styles.logo}>Jobs</Text>
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
          tabBarTextStyle={{ fontFamily: 'space-mono-bold', fontSize: 15 }}
          tabBarUnderlineStyle={{ backgroundColor: Colors.primary}}
          tabBarInactiveTextColor={Colors.primary_gray}
        >
        <JobScreen tabLabel="All" {...this.props} />
          <FavoriteScreen tabLabel="Favorites" {...this.props} />
        </ScrollableTabView>
      </View>
    );
  }
}
