import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types'
import Moment from 'moment'
import Colors from '../../constants/Colors';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './style/styles';
const Jobs = (props) => {
    const { onPress, jobTitle, jobDescription, dateTime } = props

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <MaterialCommunityIcons
                name='face-profile'
                size={80}
                color={Colors.primary} />
                <View style={styles.jobContainer}>
            <View style={styles.top}><Text style={styles.title}>{jobTitle}</Text><Text style={styles.date}>{Moment(dateTime).fromNow()}</Text></View>
            <View style={styles.body}>
            <Text style={styles.jobDescription}>{jobDescription.length <= 200 ? jobDescription : jobDescription.substring(0, 200) + "..."}</Text>
            <Text>Deadline: 2019-12-12</Text>
            </View>
            </View>
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