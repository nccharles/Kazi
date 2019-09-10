import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import styles from './styles'
import Colors from '../../constants/Colors';
const SelectLocation = (props) => {
    const { onPress, locationText,left } = props

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={[styles.Button,{paddingLeft: left}]}
                onPress={onPress}>
                <Entypo
                    name='location-pin'
                    size={23}
                    color={Colors.primary} />
                <Text
                    style={styles.buttonText}
                >
                    {locationText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

SelectLocation.propTypes = {
    onPress: PropTypes.func,
    locationText: PropTypes.string,
    left: PropTypes.number,
}
export default SelectLocation
