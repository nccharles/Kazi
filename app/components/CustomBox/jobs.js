import React from 'react';
import { TouchableOpacity,View, Text } from 'react-native';
import PropTypes from 'prop-types'
import Colors from '../../constants/Colors';
import { Entypo } from '@expo/vector-icons'
import styles from './style/styles';
const Jobs = (props) => {
    const { onPress, jobTitle, jobDescription,dateTime } = props

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.top}><Text style={styles.title}>{jobTitle}</Text><View style={styles.dateSide}><Entypo
                    name='calendar'
                    size={20}
                    color={Colors.secondary} /><Text style={styles.date}>{dateTime}</Text></View></View>
            <Text style={styles.body}>{jobDescription}</Text>
        </TouchableOpacity>
    );
}
Jobs.propTypes = {
    onPress: PropTypes.func,
    jobTitle: PropTypes.string,
    dateTime: PropTypes.string,
    jobDescription: PropTypes.string,
}
export default Jobs