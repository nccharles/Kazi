import React from 'react';
import {
  ScrollView,
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
import Colors from '../constants/Colors';
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
      <ScrollView style={styles.container}>
        <View style={styles.topBit}>
          <Text style={styles.logo}>Jobs</Text>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => alert('done')} >
              <Icon.Entypo name="suitcase" color={Colors.primary_white} size={23} style={{ padding: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 50, backgroundColor: Colors.primary_blue, justifyContent: 'center', paddingHorizontal: 5 }}>

            <Animatable.View animation="slideInRight" duration={500} style={{ height: 40,borderBottomWidth:2,borderBottomColor: 'white', backgroundColor: 'transparent', flexDirection: 'row', padding: 2, alignItems: 'center' }}>
              <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
                <Icon.Ionicons name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize: 24 }} />
              </Animatable.View>
              <TextInput placeholder="Search" style={{ fontSize: 24, marginLeft: 15, flex: 1,Color:'white' }} />
            </Animatable.View>
        </View>
        <FlatList
          style={{ backgroundColor: this.state.searchBarFocused ? 'rgba(0,0,0,0.3)' : 'white' }}
          data={data}
          renderItem={({ item }) => <Text style={{ padding: 20, fontSize: 20 }}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}
