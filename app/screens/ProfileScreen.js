import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image, AsyncStorage, ScrollView, Dimensions,
  TouchableOpacity, ImageBackground, Platform
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import Colors from '../constants/Colors';
import * as Icon from '@expo/vector-icons'
import { fName, lName, userJob, userDesc, userEmail,userPhone } from '../constants/util';
const { width, height } = Dimensions.get('window');
export default class Profile extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      job: "",
      aboutMe: "",
      email:"",
      Phone:""
    };
  }
  async componentDidMount() {
    const fname = await AsyncStorage.getItem(fName);
    const lname = await AsyncStorage.getItem(lName);
    const job = await AsyncStorage.getItem(userJob);
    const email= await AsyncStorage.getItem(userEmail);
    const Phone = await AsyncStorage.getItem(userPhone);
    const aboutMe = await AsyncStorage.getItem(userDesc)
    console.log(Phone)
    this.setState({
      fname,
      lname,
      job, aboutMe,email,Phone
    })
  }
  render() {
    const { fname, lname, job, aboutMe,email,Phone } = this.state
    return (
      <ScrollView style={styles.container}>
        <ImageBackground style={styles.header} source={require('../../assets/images/profile-bg.jpg')} >
          <LinearGradient
            colors={Colors.trans_gradient}
            start={{ x: 1.0, y: 0.5 }}
            end={{ x: 0, y: 0.5 }}
            style={styles.header_gradient}
          >
            <TouchableOpacity
              onPress={() => alert(Phone)}>
              <Icon.Ionicons
                name={Platform.os === 'ios' ? 'ios-settings' : 'md-settings'}
                size={25}
                color={Colors.primary_white} />
            </TouchableOpacity>
            <View style={styles.profile}>
              <Image style={styles.avatar} source={require('../../assets/images/user-add.png')} />
              <View style={styles.status}>
                <View style={styles.Jobstatus}>
                  <View style={styles.post}>
                    <Text style={styles.postText}>Jobs</Text>
                    <Text style={styles.postNumber}>10</Text>
                  </View>
                  <View style={styles.post}>
                    <Text style={styles.postText}>People</Text>
                    <Text style={styles.postNumber}>3</Text>
                  </View>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddWork')} style={styles.buttonContainer}>
                  <Icon.Entypo name="suitcase" color={Colors.primary_white} size={15} />
                  <Text style={styles.buttonText}> add Job</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bio}>
              <Text style={styles.name}>{fname}, {lname}</Text>
              <View style={styles.contact}>
              <View style={styles.email}>
              <Icon.Ionicons
                name={Platform.os === 'ios' ? 'ios-mail' : 'md-mail'}
                size={15}
                color={Colors.third} />
                <Text style={styles.mailText}>{email} </Text>
              </View>
              <View style={styles.phone}>
              <Icon.Entypo name="phone" color={Colors.warningBackground} size={15} />
                <Text style={styles.phoneText}> {Phone}</Text>
              </View>
              </View>
              <Text style={styles.description}> I am very passionate about {job}, strive to better myself in my career, and the development of my country.</Text>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            {/* <Text style={styles.info}>{job}</Text> */}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    padding: 0,
  },
  header_gradient: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    padding: 10,
    height: width / 1.2,
  },
  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: width - 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: Colors.primary_white,
    backgroundColor: Colors.primary_white,
  },
  status: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,

  },
  Jobstatus: {
    width: width / 2.5,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around'
  },
  post: {
    flexDirection: 'column',
    justifyContent: "center",
  },
  postText: {
    color: Colors.primary_white,
    fontFamily: 'font-regulary',
    alignSelf: 'center',
  },
  postNumber: {
    color: Colors.primary_white,
    fontFamily: 'font-bold',
    alignSelf: 'center',
  },
  bio: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  contact:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  email:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  phone:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  mailText:{
    color:Colors.primary_white,
  },
  phoneText:{
    color:Colors.primary_white,
  },
  
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 12,
    color: Colors.primary_white,
    fontFamily: 'font-bold',
  },
  info: {
    fontSize: 14,
    color: Colors.primary,
    marginTop: 10,
    fontFamily: 'font-regulary',
  },
  description: {
    color: Colors.primary_white,
    fontFamily: 'font-italic',
    marginTop: 2,
    fontSize: width / 30,
    opacity: .9
  },
  buttonContainer: {
    height: height / 25,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: width / 2.5,
    elevation: 1,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.primary_white,
    backgroundColor: Colors.trans,
  },
  buttonText: {
    color: Colors.primary_white,
    fontFamily: 'font-bold',
  }
});