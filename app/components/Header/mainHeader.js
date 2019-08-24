import React from 'react';
import PropTypes from 'prop-types'
import {
  View, Text, Image,Platform, TouchableOpacity
} from 'react-native';
import * as Icon from '@expo/vector-icons'

import styles from './styles'
import Colors from '../../constants/Colors';

const MainHeader = (props) => {
  const { onPress,headerName } = props

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            marginHorizontal: 10,
            marginTop: 2
          }}>
          <Icon.Ionicons
            name={Platform.os==='ios'?'ios-arrow-round-back':'md-arrow-round-back'}
            size={25}
            color={Colors.primary_white} />
        </TouchableOpacity>
        <Text style={styles.title}>{headerName}  </Text>
      </View>
    </View>
  );
}

MainHeader.propTypes = {
  onPress1: PropTypes.func,
  onPress2: PropTypes.func,
  headerName: PropTypes.string,
}

export default MainHeader;
