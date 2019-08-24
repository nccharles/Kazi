import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image, AsyncStorage,ScrollView,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';
import { fName, lName, userJob } from '../constants/util';

export default class Profile extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);

    this.state = {
      fname:"",
      lname:"",
      job:""
    };
  }
  async componentDidMount() {
    const fname = await AsyncStorage.getItem(fName);
    const lname = await AsyncStorage.getItem(lName);
    const job = await AsyncStorage.getItem(userJob);
    this.setState({
      fname,
      lname,
      job
    })
  }
  render() {
    const {fname,lname,job}=this.state
    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}></View>
        <Image style={styles.avatar} source={require('../../assets/images/user-add.png')} />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{fname}, {lname}</Text>
            <Text style={styles.info}>{job}</Text>
            <Text style={styles.description}> I am very passionate about {job}, strive to better myself in my career, and the development of my country.</Text>

            <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddWork')} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>ADD WORK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: Colors.primary_white,
    backgroundColor: Colors.primary_white,
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130
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
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
    fontFamily: 'font-bold',
  },
  info: {
    fontSize: 14,
    color: Colors.primary,
    marginTop: 10,
    fontFamily: 'font-regulary',
  },
  description: {
    fontSize: 14,
    color: "#696969",
    fontFamily: 'font-regulary',
    marginTop: 10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.primary_white,
    fontFamily: 'font-bold',
  }
});