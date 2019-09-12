import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity, Platform } from 'react-native'
import * as Icon from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles'
import Colors from '../../constants/Colors';

class FloatButton extends Component {

    componentName = "GradientButton";
    typeMapping = {
        button: {},
        gradient: {},
        text: {}
    };
    render() {
        const { onPress } = this.props

        return (


            <LinearGradient
                colors={Colors.primary_gradient}
                start={{ x: 1.0, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
                style={styles.chatbutton}
            ><TouchableOpacity
                onPress={onPress}>
                    <Icon.Ionicons
                        name={Platform.os === 'ios' ? 'ios-done-all' : 'md-done-all'}
                        size={30}
                        color="white" />

                </TouchableOpacity>
            </LinearGradient>
        )
    }
}
FloatButton.propTypes = {
    onPress: PropTypes.func,
}
export default FloatButton