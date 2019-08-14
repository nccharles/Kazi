import React from 'react';
import {
  View, TextInput,
  Picker, Animated, Dimensions,AsyncStorage, Platform, KeyboardAvoidingView, Text
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Input } from "react-native-elements";
import Colors from '../../constants/Colors';
import Button from '../../components/Buttons/Start';
import styles from "../styles/style"
import { data } from '../../data/joblist';
import { userChoice, userName, fName, lName, userEmail, userJob } from '../../constants/util';
const arr = [];
for (var i = 0; i < 3; i++) {
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
    const {fname,lname,email,jobtitle}= this.state.info

    if(!fname || !lname || !email ) return alert('Please all field!')

    await AsyncStorage.setItem(userName, fname)
    await AsyncStorage.setItem(fName, fname)
    await AsyncStorage.setItem(lName, lname)
    await AsyncStorage.setItem(userEmail, email)
    await AsyncStorage.setItem(userJob, jobtitle)
    await AsyncStorage.setItem(userChoice, 'true').then(() => {
      this.props.navigation.navigate('TabScreen')

    }).catch(error => {
      console.log(error.message)
    });
  }
  render() {
    const { jobtitle } = this.state.info
    // Inputs configs
    const inputs = [
      {
        placeholder: 'First Name',
        name: 'fname',
        type: '',
        icon: 'user',
        value: this.state.info.fname
      },
      {
        placeholder: 'Last Name',
        name: 'lname',
        type: '',
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
    const jobposition = data.map((job, i) => {
      return (
        <Picker.Item
          label={job}
          value={job}
        />
      )
    })
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
            onChangeText={(input) => this._handleInput(a.name, input)}
            value={a.value}
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
          <Picker
            mode="dropdown"
            selectedValue={jobtitle}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              this._handleInput("jobtitle", itemValue)
            }
          >
            {jobposition}
          </Picker>
          {animatedInputs}

          <Button text="Next" onPress={() => this._handleSignup()} />
        </View>
        {Platform.OS === 'android' &&
          <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={screenwidth / 24} />}
      </LinearGradient>
    );
  }
}