import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import styles from './styles'
import Colors from '../../constants/Colors';
const DatePicker = (props) => {
    const { onPress, Deadline,left } = props

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={[styles.Button,{paddingLeft: left}]}
                onPress={onPress}>
                <Entypo
                    name='calendar'
                    size={23}
                    color={Colors.primary} />
                <Text
                    style={styles.buttonText}
                >
                    {Deadline}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

DatePicker.propTypes = {
    onPress: PropTypes.func,
    Deadline: PropTypes.string,
    left: PropTypes.number,
}
export default DatePicker
