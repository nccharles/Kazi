import React from 'react';
import PropTypes from 'prop-types'
import {
    View, Text, Image, Platform, TouchableOpacity
} from 'react-native';
import * as Icon from '@expo/vector-icons'

import styles from './styles'
import Colors from '../../constants/Colors';

const JobHeader = (props) => {
    const { onPress1, onPress2, Job } = props

    return (
        <View style={[styles.container, { backgroundColor: 'transparent', position: 'absolute' }]}>
            <View style={[styles.wrapper, { backgroundColor: 'transparent' }]}>
                <TouchableOpacity
                    onPress={onPress2}
                    style={{
                        marginHorizontal: 10,
                        marginTop: 2
                    }}>
                    <Icon.Ionicons
                        name={Platform.os === 'ios' ? 'ios-arrow-round-back' : 'md-arrow-round-back'}
                        size={25}
                        color={Colors.primary_white} />
                </TouchableOpacity>
                <Text style={[styles.title, { backgroundColor: 'transparent' }]}>{Job}   </Text>
                <View style={[styles.buttonContainer, { backgroundColor: 'transparent' }]}>
                    <TouchableOpacity
                        onPress={onPress1}>
                        <Icon.Ionicons
                            name={Platform.os === 'ios' ? 'ios-share-alt' : 'md-share'}
                            size={25}
                            color={Colors.primary_white} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

JobHeader.propTypes = {
    onPress1: PropTypes.func,
    onPress2: PropTypes.func,
    Job: PropTypes.string,
}

export default JobHeader;
