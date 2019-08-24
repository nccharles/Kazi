import React from 'react';
import {
  View, Dimensions, AsyncStorage, Platform, KeyboardAvoidingView
} from 'react-native';
import { Input } from "react-native-elements";
import Colors from '../constants/Colors';
import styles from "./styles/style"
import moment from "moment";
import { jName, jobdate, joblocation } from '../constants/util';
import SelectCareer from '../components/Select/selectCareer';
import MainHeader from '../components/Header/mainHeader';
import RoundButton from '../components/Buttons/RoundButton';
import DateTimePicker from "react-native-modal-datetime-picker";
import DatePicker from '../components/Select/datePicker';
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
        datetime: "Select Date",
        baseJob: "Job type"
      },
      isDateTimePickerVisible: false
    }
  }


  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.setState(state => ({
      info: {
        ...state.info,
        datetime: moment(date).format("YYYY-MM-DD"),
      }
    }))
    this.hideDateTimePicker();
  };

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

    if (baseJob === "Job type" || !location || datetime === "Select Date") return alert('Please all fields!')

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
    const { baseJob, location, datetime } = this.state.info
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
        <MainHeader
          headerName="New job"
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={{ width: '100%', paddingHorizontal: 25 }}>
          <SelectCareer
            left={25}
            onPress={() => this.props.navigation.navigate('Job', { setBaseJob: this.setBaseJob })}
            careerText={baseJob} />
          <DatePicker
            left={25}
            onPress={this.showDateTimePicker}
            careerText={datetime} />
          <Input
            selectionColor={Colors.primary}
            placeholder="Location"
            placeholderTextColor={Colors.primary}
            leftIcon={{ type: 'entypo', name: "location-pin", color: Colors.primary }}
            containerStyle={styles.input}
            underlineColorAndroid={'transparent'}
            inputStyle={styles.inputStyle}
            inputContainerStyle={styles.containerStyle}
            autoCapitalize='none'
            keyboardType="default"
            autoCorrect={false}
            returnKeyType={"next"}
            onChangeText={(input) => this._handleInput("location", input)}
            value={location}
            editable={true}
          />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
            minimumDate={new Date()}
            mode="date"
            datePickerModeAndroid="calendar"
          />
          <RoundButton text="Next" onPress={() => this._handleAddJob()} />
        </View>
        {Platform.OS === 'android' &&
          <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={screenwidth / 24} />}
      </View>
    );
  }
}