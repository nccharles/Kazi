import React from 'react';
import {
  Text,
  ScrollView,
  Keyboard,
  View,
} from 'react-native';
import styles from '../styles/style'
import Jobs from '../../components/CustomBox/jobs';
export default class allJobsScreen extends React.Component {
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
      {/* <Jobs dateTime="2019-08-12" jobDescription="Our platform deployed in Rwanda today reflects the IT landscape of a couple of years ago. It's hosted locally in Kigali, on VMWare instances managed with Chef. However, we're committed to a full-stack refresh, making use of our new distributed architecture - meaning that in 12 months' time, this platform will be a hybrid of local services running in Docker (and Kubernetes)
       working with global services in our AWS hosted Kubernetes model."
      jobTitle="Software Developer"
      /> */}
      
        <View style={styles.caption}>
        <Text style={styles.empty}>No Job yet!</Text>
      </View>
      </ScrollView>
    );
  }
}
