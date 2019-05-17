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
            <Icon.FontAwesome name={Platform.OS === 'ios' ? "handshake-o" : 'handshake-o'} size={100} color={'#FFFFFF'} />
            <Text style={styles.header}>Rwanda</Text>
            <Text style={styles.text}>Known as the land of a thousand hills, Rwanda’s stunning scenery and warm, friendly people offer unique experiences in one of the most remarkable countries in the world.</Text>
        </LinearGradient>
        {/* Second screen */}
        <LinearGradient
            colors={Colors.Swiper_gradient}
            start={{ x: 0.5, y: 1.0 }}
            end={{ x: 1.0, y: 0 }}
            style={styles.slide}
        >
            <Icon.MaterialCommunityIcons name={Platform.OS === 'ios' ? "food-fork-drink" : 'food-fork-drink'} size={100} color={'#FFFFFF'} />
            <Text style={styles.header}>Feel at home</Text>
            <Text style={styles.text}>It is blessed with extraordinary biodiversity, with incredible wildlife living throughout its volcanoes, montane rainforest and sweeping plains.</Text>
        </LinearGradient>
        {/* Third screen */}
        <LinearGradient
            colors={Colors.Swiper_gradient}
            start={{ x: 0.5, y: 1.0 }}
            end={{ x: 1.0, y: 0 }}
            style={styles.slide}
        >
            <Icon.MaterialIcons name={Platform.OS === 'ios' ? "local-hotel" : 'local-hotel'} size={100} color={'#FFFFFF'} />
            <Text style={styles.header}>Accomodation</Text>
            <Text style={styles.text}>The most breathtaking lodges in Africa, with just ensuite bedrooms built into the hills.</Text>
        </LinearGradient>
    </Swiper>
    );
  }
}
