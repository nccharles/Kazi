import React from 'react';
import {
  View, TextInput, Animated, Dimensions, Text, AsyncStorage, Platform, KeyboardAvoidingView
} from 'react-native';
import Colors from '../../constants/Colors';
import styles from "../styles/style"
import { Entypo } from '@expo/vector-icons'
import { userChoice, userJob, userDesc } from '../../constants/util';
import SelectCareer from '../../components/Select/selectCareer';
import RoundButton from '../../components/Buttons/RoundButton';
import BackHeader from '../../components/Header/BackHeader';
const arr = [];
for (let i=0; i < 2; i++) {
  arr.push(i)
};

const screenwidth = Dimensions.get('window').width
export default class careerScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      info: {
        description: "",
        baseJob: "Select career"
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
    const { description, baseJob } = this.state.info

    if (!description || baseJob === 'Select career') return alert('Please fill all fields!')

    await AsyncStorage.setItem(description, userDesc)
    await AsyncStorage.setItem(userJob, baseJob)
    await AsyncStorage.setItem(userChoice, 'true').then(() => {
      this.props.navigation.navigate('TabScreen')

    }).catch(error => {
      console.log(error.message)
    });
  }
  setBaseJob = async (Job) => {

    const { baseJob } = Job
    this.setState(state => ({
      info: {
        ...state.info,
        baseJob: baseJob
      }
    }))
  }
  render() {
    const { description, baseJob } = this.state.info
    // Inputs configs
    const inputs = [
      {
        placeholder: `eg:[ I am very passionate about Business, strive to better myself in my career, and development of my country. ]`,
        name: 'description',
        type: 'default',
        value: description
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
          <TextInput
            multiline={true}
            numberOfLines={4}
            selectionColor={Colors.primary}
            placeholder={a.placeholder}
            placeholderTextColor={Colors.primary}
            style={styles.inputDescription}
            underlineColorAndroid={'transparent'}
            autoCapitalize='none'
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
        <BackHeader
          headerName="Career & Description" onPress={() => this.props.navigation.goBack()}
        />
        <View style={{ width: '100%', paddingHorizontal: 25 }}>
          <SelectCareer
            onPress={() => this.props.navigation.navigate('Job', { setBaseJob: this.setBaseJob })}
            careerText={baseJob} />
          <View style={styles.infoWithIcon}>
            <Entypo
              name='info-with-circle'
              size={25}
              color={Colors.primary} />
            <Text style={styles.aboutText}>About Yourself</Text></View>
          {animatedInputs}
          <RoundButton text="Done" onPress={() => this._handleSignup()} />
        </View>
        {Platform.OS === 'android' &&
          <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={screenwidth / 24} />}
      </View>
    );
  }
}