import React, { Component } from 'react';
import { Text,Platform,AsyncStorage } from 'react-native';

import Swiper from '../components/Swiper/Swiper';
import {Icon,LinearGradient} from 'expo'
import Colors from '../constants/Colors';
import styles from './styles'
import { userChoice } from '../constants/util';
export default class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
        initialRouter: 'WelcomeStack'
    };
  }
_handleUser=async()=>{
await AsyncStorage.setItem(userChoice,'true').then(()=>{
    this.props.navigation.navigate('TabScreen')
    
}).catch(error=>{
console.log(error.message)
});
}
  render() {
    return (
        <Swiper handleThis={this._handleUser.bind(this)}>
        {/* First screen */}
        <LinearGradient
            colors={Colors.Swiper_gradient}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.slide}
        >
            <Icon.Ionicons name={Platform.OS === 'ios' ? "ios-briefcase" : 'md-briefcase'} size={100} color={'#FFFFFF'} />
            <Text style={styles.header}>Kazi</Text>
            <Text style={styles.text}>Create a Profile and get a job</Text>
        </LinearGradient>
        {/* Second screen */}
        <LinearGradient
            colors={Colors.Swiper_gradient}
            start={{ x: 0.5, y: 1.0 }}
            end={{ x: 1.0, y: 0 }}
            style={styles.slide}
        >
            <Icon.Ionicons name={Platform.OS === 'ios' ? "ios-search" : 'md-search'} size={100} color={'#FFFFFF'} />
            <Text style={styles.header}>Search a best job</Text>
            {/* <Text style={styles.text}></Text> */}
        </LinearGradient>
        {/* Third screen */}
        <LinearGradient
            colors={Colors.Swiper_gradient}
            start={{ x: 0.5, y: 1.0 }}
            end={{ x: 1.0, y: 0 }}
            style={styles.slide}
        >
            <Icon.Ionicons name={Platform.OS === 'ios' ? "ios-chatboxes" : 'md-chatboxes'} size={100} color={'#FFFFFF'} />
            <Text style={styles.header}>Chats</Text>
            {/* <Text style={styles.text}>The most breathtaking lodges in Africa, with just ensuite bedrooms built into the hills.</Text> */}
        </LinearGradient>
    </Swiper>
    );
  }
}
