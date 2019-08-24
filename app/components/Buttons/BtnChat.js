import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native'
import * as Icon from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import styles from './styles'
import Colors from '../../constants/Colors';

class ChatButton extends Component {

    componentName = "GradientButton";
    typeMapping = {
        button: {},
        gradient: {},
        text: {}
    };
    render() {
        const { onPress, value, status } = this.props

        return (


            <LinearGradient
                colors={Colors.primary_gradient}
                start={{ x: 1.0, y: 0.5 }}
                end={{ x: 0, y: 0.5 }}
                style={styles.chatbutton}
            ><TouchableOpacity
                onPress={onPress}>
                    <Icon.MaterialIcons
                        name="chat"
                        size={30}
                        color="white" />

                </TouchableOpacity>
            </LinearGradient>
        )
    }
}
ChatButton.propTypes = {
    onPress: PropTypes.func,
    value: PropTypes.number,
    status: PropTypes.string
}
export default ChatButton