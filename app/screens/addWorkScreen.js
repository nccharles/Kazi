import React from 'react';
import {
  View,
  Picker, Animated, Dimensions, AsyncStorage, Platform, KeyboardAvoidingView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Input } from "react-native-elements";
import Colors from '../constants/Colors';
import Button from '../components/Buttons/Start';
import styles from "./styles/style"
import { jName, jobdate, joblocation } from '../constants/util';
import SelectCareer from '../components/Select/selectCareer';
const arr = [];
for (var i = 0; i < 3; i++) {
  arr.push(i)
};

const screenwidth = Dimensions.get('window').width
export default class AddWorkScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      info: {
        location: "",
        datetime: "",
        baseJob: "Job type"
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
  _handleAddJob = async () => {
    const { baseJob, location, datetime } = this.state.info

    if (baseJob==="Job type" || !location || !datetime) return alert('Please all fields!')

    await AsyncStorage.setItem(jName, baseJob)
    await AsyncStorage.setItem(joblocation, location)
    await AsyncStorage.setItem(jobdate, datetime).then(() => {
      this.props.navigation.navigate('JobInfo')

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
    const { baseJob,location,datetime } = this.state.info
    // Inputs configs
    const inputs = [
      {
        placeholder: 'Location',
        name: 'location',
        type: 'default',
        icon: 'map',
        value: location
      },
      {
        placeholder: 'Date',
        name: 'datetime',
        type: 'default',
        icon: 'calendar',
        value: datetime
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
            selectionColor="#fff"
            placeholder={a.placeholder}
            placeholderTextColor="#fff"
            leftIcon={{ type: 'entypo', name: a.icon, color: Colors.primary_white }}
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
        <SelectCareer
            onPress={() => this.props.navigation.navigate('Job', { setBaseJob: this.setBaseJob })}
            careerText={baseJob} />
          {animatedInputs}

          <Button text="Next" onPress={() => this._handleAddJob()} />
        </View>
        {Platform.OS === 'android' &&
          <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={screenwidth / 24} />}
      </LinearGradient>
    );
  }
}