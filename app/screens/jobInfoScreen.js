import React from 'react';
import {
  View, TextInput, Animated, Dimensions, Text, AsyncStorage, Platform, KeyboardAvoidingView
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../constants/Colors';
import Button from '../components/Buttons/Start';
import styles from "./styles/style"
import { MaterialIcons } from '@expo/vector-icons'
import { jDesc, jobweeks } from '../constants/util';
const arr = [];
for (var i = 0; i < 2; i++) {
  arr.push(i)
};

const screenwidth = Dimensions.get('window').width
export default class jobInfoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      info: {
        description: "",
        weeks: ""
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
  _handleAdd = async () => {
    const { description, weeks } = this.state.info

    if (!description || !weeks) return alert('Please fill all fields!')

    await AsyncStorage.setItem(jDesc, description)
    await AsyncStorage.setItem(jobweeks, weeks).then(() => {
      this.props.navigation.navigate('HomeScreen')

    }).catch(error => {
      console.log(error.message)
    });
  }
 
  render() {
    const { description, weeks } = this.state.info
    // Inputs configs
    const inputs = [
        {
            placeholder: `eg: 3`,
            line:1,
            icon:"view-week",
            title:"how many weeks",
            name: 'weeks',
            type: 'numeric',
            value: weeks
          },
      {
        placeholder: `eg:[ This job is... ]`,
        line:4,
        icon:"info-outline",
        title:"About this Job",
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
        <View style={styles.infoWithIcon}>
            <MaterialIcons
              name={a.icon}
              size={25}
              color={Colors.primary_white} />
            <Text style={styles.aboutText}>{a.title}</Text></View>
          <TextInput
            multiline={true}
            numberOfLines={a.line}
            selectionColor="#fff"
            placeholder={a.placeholder}
            placeholderTextColor="#fff"
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
          <Button text="Done" onPress={() => this._handleAdd()} />
        </View>
        {Platform.OS === 'android' &&
          <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={screenwidth / 24} />}
      </LinearGradient>
    );
  }
}