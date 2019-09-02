import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types'
import Moment from 'moment'
import Colors from '../../constants/Colors';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './style/styles';
const Jobs = (props) => {
    const { onPress, jobTitle, jobDescription, postedAt,deadline,user } = props

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <MaterialCommunityIcons
                name='face-profile'
                size={80}
                color={Colors.primary} style={styles.profile} />
            <View style={styles.jobContainer}>
                <View style={styles.top}><Text style={styles.title}>{user}</Text><Text style={styles.date}>{Moment(postedAt).fromNow()}</Text></View>
                <View style={styles.body}>
                    <View style={styles.Jobside}><Entypo
                        name='briefcase'
                        size={10}
                        color={Colors.primary} /><Text style={styles.jobTitle}>{jobTitle}</Text></View>
                    <Text style={styles.jobDescription}>{jobDescription.length <= 200 ? jobDescription : jobDescription.substring(0, 200) + "..."}</Text>
                    <View style={styles.deadSide}><Entypo
                        name='calendar'
                        size={12}
                        color={Colors.primary} /><Text style={styles.deadline}>{deadline}</Text></View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
Jobs.propTypes = {
    onPress: PropTypes.func,
    user:PropTypes.string,
    jobTitle: PropTypes.string,
    postedAt: PropTypes.string,
    deadline: PropTypes.string,
    jobDescription: PropTypes.string,
}
export default Jobs