import React from 'react';
import {
  View, TextInput, Animated, Dimensions, TouchableWithoutFeedback, ScrollView, Text, AsyncStorage, Platform, KeyboardAvoidingView
} from 'react-native';
import Colors from '../constants/Colors';
import styles from "./styles/style"
import { MaterialIcons } from '@expo/vector-icons'
import * as firebase from 'firebase'
import { RadioButtons } from 'react-native-radio-buttons'
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
      selectedOption: "Negotiable",
      info: {
        description: "",
        amount: "",
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
    const { info: { description, amount, require }, selectedOption, baseInfo: { location, baseJob, datetime } } = this.state
    const userFname = await AsyncStorage.getItem(fName)
    const userLname = await AsyncStorage.getItem(lName)
    const Phone = await AsyncStorage.getItem(userPhone)
    if (!description || !amount || !require) return alert('Please fill all fields!')
    // insert into database
    await firebase
      .database()
      .ref(`/Jobs/`)
      .push({
        description,
        require,
        location,
        baseJob,
        deadline: datetime,
        postedAt: toDay,
        price: amount,
        userPhone: Phone,
        type: selectedOption,
        user: `${userFname} ${userLname}`,
      }).then(() => {
        this.props.navigation.navigate('HomeScreen')
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
    const style = selected ? { color:Colors.secondary,backgroundColor: Colors.primary_white } : {color:Colors.primary_white};

    return (
      <TouchableWithoutFeedback onPress={onSelect} key={index}>
        <Text style={[style,{padding: 10,borderWidth: 1,borderColor:Colors.secondary,fontFamily:'font-bold'}]}>{option}</Text>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    const { description, amount, require } = this.state.info
    const options = [
      "Negotiable",
      "No negotiable"
    ];
    // Inputs configs
    const inputs = [
      {
        placeholder: `eg: 1500`,
        line: 1,
        icon: "monetization-on",
        title: "Daily amount",
        name: 'amount',
        type: 'numeric',
        value: amount
      },
      {
        placeholder: `This job is... `,
        line: 4,
        icon: "info-outline",
        title: "Job Description",
        name: 'description',
        type: 'default',
        value: description
      },
      {
        placeholder: `You are eligible... `,
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
          <RadioButtons
            options={options}
            onSelection={this.setSelectedOption}
            selectedOption={ this.state.selectedOption }
            renderContainer={RadioButtons.getViewContainerRenderer({
              backgroundColor: Colors.secondary,
              borderRadius: 12,
              elevation: 3,
              width: width/1.5,
              flexDirection: 'row',
              justifyContent: 'space-around',
            })}
            renderOption={this.renderOption}
          />
        </ScrollView>
        <FloatButton onPress={() => this._handleAdd()} />
      </KeyboardAvoidingView>
    );
  }
}
