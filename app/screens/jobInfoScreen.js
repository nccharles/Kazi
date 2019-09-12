import React from 'react';
import {
  View, TextInput, Animated, Dimensions, ScrollView, Text, AsyncStorage, Platform, KeyboardAvoidingView
} from 'react-native';
import Colors from '../constants/Colors';
import styles from "./styles/style"
import { MaterialIcons } from '@expo/vector-icons'
import * as firebase from 'firebase'
import MainHeader from '../components/Header/mainHeader';
import FloatButton from '../components/Buttons/Btnfloat';
import { userPhone, fName, lName } from '../constants/util';
const arr = [];
for (let i = 0; i < 2; i++) {
  arr.push(i)
};

const { width, height } = Dimensions.get('window')
export default class jobInfoScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      baseInfo: this.props.navigation.state.params.baseInfo,
      info: {
        description: "",
        weeks: "",
        require: ""
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
    const toDay = new Date().valueOf();
    const { description, weeks, require } = this.state.info
    const { location, baseJob, datetime } = this.state.baseInfo
    const userFname = await AsyncStorage.getItem(fName)
    const userLname = await AsyncStorage.getItem(lName)
    const Phone = await AsyncStorage.getItem(userPhone)
    if (!description || !weeks || !require) return alert('Please fill all fields!')
    // insert into database
    await firebase
      .database()
      .ref(`/Jobs/`)
      .push({
        description,
        weeks,
        require,
        location,
        baseJob,
        deadline: datetime,
        postedAt: toDay,
        price: "20000",
        userPhone: Phone,
        type:"negotiable",
        user:`${userFname} ${userLname}`,
      }).then(() => {
        this.props.navigation.navigate('HomeScreen')
      }).catch(error => {
        console.log(error.message)
      });
  }

  render() {
    const { description, weeks, require } = this.state.info
    // Inputs configs
    const inputs = [
      {
        placeholder: `eg: 3`,
        line: 1,
        icon: "view-week",
        title: "how many weeks",
        name: 'weeks',
        type: 'numeric',
        value: weeks
      },
      {
        placeholder: `eg:[ This job is... ]`,
        line: 4,
        icon: "info-outline",
        title: "Job Description",
        name: 'description',
        type: 'default',
        value: description
      },
      {
        placeholder: `eg:[ You are eligible... ]`,
        line: 4,
        icon: "info-outline",
        title: "Requirements",
        name: 'require',
        type: 'default',
        value: require
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
              color={Colors.primary} />
            <Text style={styles.aboutText}>{a.title}</Text></View>
          <TextInput
            multiline={true}
            numberOfLines={a.line}
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
      <KeyboardAvoidingView keyboardVerticalOffset={width / 24}
        style={{
          width: width,
          paddingBottom: 12,
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
        enabled>
        <MainHeader headerName="job Description"
          onPress={() => this.props.navigation.goBack()}
        />
        <ScrollView style={{ width: width, paddingHorizontal: 25 }}>
          {animatedInputs}
        </ScrollView>
        <FloatButton onPress={() => this._handleAdd()} />
      </KeyboardAvoidingView>
    );
  }
}