import React from 'react';
import {
  View,Animated, Dimensions, AsyncStorage, Platform, KeyboardAvoidingView
} from 'react-native';
import { Input } from "react-native-elements";
import Colors from '../../constants/Colors';
import styles from "../styles/style"
import { userName, fName, lName, userEmail } from '../../constants/util';
import RoundButton from '../../components/Buttons/RoundButton';
import NobackHeader from '../../components/Header/NoBackHeader';
const arr = [];
for (let i=0; i < 3; i++) {
  arr.push(i)
};

const screenwidth = Dimensions.get('window').width
export default class SignupScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      info: {
        fname: "",
        lname: "",
        email: "",
        jobtitle: ""
      }
    }
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
  _handleInput = (key, value) => {
    console.log(key, value);
    this.setState(state => ({
      info: {
        ...state.info,
        [key]: value
      }
    }));
  };
  _handleSignup = async () => {
    const { fname, lname, email } = this.state.info

    if (!fname || !lname || !email) return alert('Please all fields!')

    await AsyncStorage.setItem(userName, fname)
    await AsyncStorage.setItem(fName, fname)
    await AsyncStorage.setItem(lName, lname)
    await AsyncStorage.setItem(userEmail, email).then(() => {
      this.props.navigation.navigate('Career')

    }).catch(error => {
      console.log(error.message)
    });
  }
  render() {
    // Inputs configs
    const inputs = [
      {
        placeholder: 'First Name',
        name: 'fname',
        type: 'default',
        icon: 'user',
        value: this.state.info.fname
      },
      {
        placeholder: 'Last Name',
        name: 'lname',
        type: 'default',
        icon: 'user',
        value: this.state.info.lname
      },
      {
        placeholder: 'Email address',
        name: 'email',
        type: 'email-address',
        icon: 'mail',
        value: this.state.info.email
      }
    ];
    
    const animatedInputs = inputs.map((a, i) => {
      return (
        <Animated.View
          key={i}
          style={{
            opacity: this.animatedInputValue[i], // attaching animations to the input opacity
          }}
        >
          <Input
            selectionColor={Colors.primary}
            placeholder={a.placeholder}
            placeholderTextColor={Colors.primary}
            leftIcon={{ type: 'entypo', name: a.icon, color: Colors.primary }}
            containerStyle={styles.input}
            underlineColorAndroid={'transparent'}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.containerStyle}
            autoCapitalize='none'
            keyboardType={a.type}
            autoCorrect={false}
            returnKeyType={"next"}
            onChangeText={(input) => this._handleInput(a.name, input)}
            value={a.value}
            editable={true}
          />

        </Animated.View>

      );
    });

    return (
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <NobackHeader headerName="Sign up" onPress={() => this._handleSignup()}/>
        <View style={{ width: '100%', paddingHorizontal: 25 }}>
          {animatedInputs}

          <RoundButton text="Next" onPress={() => this._handleSignup()} />
        </View>
        {Platform.OS === 'android' &&
          <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={screenwidth / 24} />}
      </View>
    );
  }
}