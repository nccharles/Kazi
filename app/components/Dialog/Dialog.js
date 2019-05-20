import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { View } from 'react-native';
import Dialog from "react-native-dialog";

class DialogComponent extends Component {

  render() {

    const {
      visible,
      onPress,
      onPressCancel,
      title,
      description,
      label2
    } = this.props

    return (
      <View>
        <Dialog.Container visible={visible}>
          <Dialog.Title>{title}   </Dialog.Title>
          <Dialog.Description>
            {description}
          </Dialog.Description>
          <Dialog.Button label="Cancel   " onPress={onPressCancel} />
          <Dialog.Button label={label2} onPress={onPress} />
        </Dialog.Container>
      </View>
    );
  }
}

DialogComponent.propTypes = {
  visible: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  input: PropTypes.string,
  onChangeText: PropTypes.func,
  onPress: PropTypes.func,
  onPressCancel: PropTypes.func,
  label2: PropTypes.string
}

export default DialogComponent