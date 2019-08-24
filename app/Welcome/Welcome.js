import React, { Component } from 'react';
import { Text, Platform } from 'react-native';

import Swiper from '../components/Swiper/Swiper';
import * as Icon from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../constants/Colors';
import styles from './styles'
export default class Introduction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialRouter: 'WelcomeStack'
        };
    }
    _handleUser = async () => {
        this.props.navigation.navigate('Login')

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
                    start={{ x: 0.5, y: 0 }}
                    style={styles.slide}
                >
                    <Icon.Ionicons name={Platform.OS === 'ios' ? "ios-search" : 'md-search'} size={100} color={'#FFFFFF'} />
                    <Text style={styles.header}>Search a best job</Text>
                    {/* <Text style={styles.text}></Text> */}
                </LinearGradient>
                {/* Third screen */}
                <LinearGradient
                    colors={Colors.Swiper_gradient}
                    end={{ x: 1, y: 1 }}
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
