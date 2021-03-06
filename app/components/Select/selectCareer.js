import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import PropTypes from 'prop-types'
import styles from './styles'
import Colors from '../../constants/Colors';
const SelectCareer = (props) => {
    const { onPress, careerText,left } = props

    return (
        <View style={styles.container}>

            <TouchableOpacity
                style={[styles.Button,{paddingLeft: left}]}
                onPress={onPress}>
                <Entypo
                    name='briefcase'
                    size={23}
                    color={Colors.primary} />
                <Text
                    style={styles.buttonText}
                >
                    {careerText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

SelectCareer.propTypes = {
    onPress: PropTypes.func,
    careerText: PropTypes.string,
    left: PropTypes.number,
}
export default SelectCareer
