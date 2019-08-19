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
import styles from '../styles/style'
export default class FavoriteScreen extends React.Component {
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
        <View style={styles.caption}>
        <Text style={styles.empty}>No People to follow!</Text>
      </View>
      </View>
    );
  }
}
