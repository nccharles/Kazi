import React from 'react';
import {
  View, Animated, Dimensions, ImageBackground, AsyncStorage, TouchableWithoutFeedback, Text, Platform, KeyboardAvoidingView
} from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons'
import { Input } from "react-native-elements";
import Colors from '../../constants/Colors';
import styles from "../styles/style"
import * as firebase from 'firebase'
import { LinearGradient } from 'expo-linear-gradient'
import { userName, fName, lName, userEmail, userType, userPhone } from '../../constants/util';
import RoundButton from '../../components/Buttons/RoundButton';
import NobackHeader from '../../components/Header/NoBackHeader';
const arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(i)
};
const { width } = Dimensions.get('window')
export default class SignupScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "find Jobs",
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
    const { selectedOption, info: { fname, lname, email } } = this.state

    if (!fname || !lname || !email) return alert('Please all fields!')

    await AsyncStorage.setItem(userName, fname)
    await AsyncStorage.setItem(fName, fname)
    await AsyncStorage.setItem(lName, lname)
    await AsyncStorage.setItem(userType, selectedOption)
    await AsyncStorage.setItem(userEmail, email)
    const userMob = await AsyncStorage.getItem(userPhone)
    await firebase
      .database()
      .ref(`/Users/${userMob}`)
      .update({
        username: fname,
        fname,
        lname,
        phone: userMob,
        userBio:"My bio ~",
        career:'',
        userType: selectedOption
      }).then(() => {
        this.props.navigation.navigate(selectedOption === 'find Jobs' ? 'Career' : 'TabScreen')
      }).catch(error => {
        console.log(error.message)
      });
  }
  setSelectedOption = selectedOption => {
    this.setState({
      selectedOption
    });
  }
  renderOption = (option, selected, onSelect, index) => {
    const style = selected ? { color: Colors.primary_white, backgroundColor: Colors.secondary } : { color: Colors.primary_white };

    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index}>
        <Text style={[style, { padding: 20, borderWidth: .6, borderRadius: 20, alignSelf: "center", borderColor: Colors.primary_white, fontFamily: 'font-bold' }]}>{option}</Text>
      </TouchableWithoutFeedback>
    );
  }
  render() {
    const options = [
      "find Jobs",
      "add Job"
    ];
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
            placeholderTextColor={Colors.primary_gray}
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
        <NobackHeader headerName="Sign up" onPress={() => this._handleSignup()} />
        <View style={{ width: '100%', paddingHorizontal: 25 }}>

          {animatedInputs}

          <RoundButton text="Next" onPress={() => this._handleSignup()} />
        </View>
        {Platform.OS === 'android' &&
          <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={width / 24} />}
        <View style={{
          width: '100%',
          borderRadius: 20,
          height: width / 4,
          marginBottom: 0,
        }}>
          <ImageBackground style={{
            width: '100%',
            backgroundColor: Colors.primary_white,
            height: width / 4,
          }} source={require('../../../assets/images/jobs.jpg')} >
            <LinearGradient
              colors={Colors.trans_gradient}
              start={{ x: 1.0, y: 0.5 }}
              end={{ x: 0, y: 0.5 }} style={{
                width: '100%',
                height: width / 4,
              }}>
              <RadioButtons
                options={options}
                onSelection={this.setSelectedOption}
                selectedOption={this.state.selectedOption}
                renderContainer={RadioButtons.getViewContainerRenderer({
                  backgroundColor: 'transparent',
                  width: '100%',
                  height: width / 4,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  borderRadius: 20,
                })}
                renderOption={this.renderOption}
              />
            </LinearGradient>
          </ImageBackground>
        </View>
      </View>
    );
  }
}