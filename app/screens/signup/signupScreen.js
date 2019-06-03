import React from 'react';
import { View, TextInput, Animated, Dimensions, Platform, KeyboardAvoidingView, Text } from 'react-native';
import { LinearGradient } from 'expo'
import { Input } from "react-native-elements";
import Colors from '../../constants/Colors';
import Button from '../../components/Buttons/Start';
import styles from "../styles/style"
const arr = [];
for (var i = 0; i < 3; i++) {
  arr.push(i)
};

// Inputs configs
const inputs = [
  {
    placeholder: 'First Name',
    name:'name',
    type: '',
    icon:'user'
  },
  {
    placeholder: 'Last Name',
    name:'name',
    type: '',
    icon:'user'
  },
  {
    placeholder: 'Email address',
    name:'email',
    type: 'email-address',
    icon:'mail'
  }
];
const screenwidth = Dimensions.get('window').width
export default class SignupScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.animatedInputValue = [];
    arr.forEach((value) => {
      this.animatedInputValue[value] = new Animated.Value(0)
    });
  }

  componentDidMount() {
    // creating array animations 
    const inputAnimations = arr.map((item) => {
      return Animated.timing(
        this.animatedInputValue[item],
        {
          toValue: 1,
          duration: 1500,
        }
      );
    });
    // Animate each element after 1000 miliseconds
    Animated.stagger(1000, inputAnimations).start();
  }

  render() {
    const animatedInputs = inputs.map((a, i) => {
      return (
        <Animated.View
          key={i}
          style={{
            opacity: this.animatedInputValue[i], // attaching animations to the input opacity
          }}
        >
          <Input
            // inputStyle={[{ borderColor: '#fff', borderBottomWidth: 1, padding: 5, marginBottom: 30 }]}
            selectionColor="#fff"
            placeholder={a.placeholder}
            placeholderTextColor="#fff"
            leftIcon={{ type: 'entypo', name: a.icon, color: Colors.primary_white }}
              containerStyle={styles.input}
              underlineColorAndroid={'transparent'}
              inputStyle={styles.inputStyle}
              autoCapitalize='none'
              keyboardType={a.type}
              autoCorrect={false}
              returnKeyType={"next"}
            //   onChangeText={(input) => this._handleInput('email', input)}
            //   value={this.state.credentails.email}
              editable={true}
          />
        </Animated.View>
      );
    });

    return (
      <LinearGradient
        colors={Colors.Swiper_gradient}
        start={{ x: 0.5, y: 1.0 }}
        end={{ x: 1.0, y: 0 }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <View style={{ width: '100%', paddingHorizontal: 25 }}>
          {animatedInputs}
          <Button text="Next" />
        </View>
        {Platform.OS === 'android' &&
          <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={screenwidth / 24} />}
      </LinearGradient>
    );
  }
}