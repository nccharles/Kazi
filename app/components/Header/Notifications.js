import React from 'react';
import PropTypes from 'prop-types'
import {
  View, Text, Image,Platform, TouchableOpacity
} from 'react-native';
import {Icon } from 'expo'

import styles from './styles'
import Colors from '../../constants/Colors';

const DetailsHeader = (props) => {
  const { onPress1, onPress2, source } = props

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={onPress2}
          style={{
            marginHorizontal: 10,
            marginTop: 2
          }}>
          <Icon.Ionicons
            name={Platform.os==='ios'?'ios-arrow-round-back':'md-arrow-round-back'}
            size={25}
            color={Colors.primary} />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications   </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={onPress1}>
            <Icon.Ionicons
            name={Platform.os==='ios'?'ios-settings':'md-settings'}
            size={25}
            color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

DetailsHeader.propTypes = {
  onPress1: PropTypes.func,
  onPress2: PropTypes.func,
  source1: PropTypes.any,
}

export default DetailsHeader;
