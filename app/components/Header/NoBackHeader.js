import React from 'react';
import PropTypes from 'prop-types'
import {
  View, Text, Image,Platform, TouchableOpacity
} from 'react-native';
import * as Icon from '@expo/vector-icons'

import styles from './styles'
import Colors from '../../constants/Colors';

const NobackHeader = (props) => {
  const { onPress,headerName } = props

  return (
    <View style={[styles.container,{backgroundColor: Colors.primary_white,elevation: 0}]}>
      <View style={styles.wrapper}>
        <Text style={[styles.title,{color:Colors.primary}]}>{headerName}  </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={onPress}>
            <Icon.Ionicons
            name={Platform.os==='ios'?'ios-done-all':'md-done-all'}
            size={25}
            color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

NobackHeader.propTypes = {
  onPress: PropTypes.func,
  headerName: PropTypes.string,
}

export default NobackHeader;
