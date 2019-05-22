import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Colors from '../constants/Colors';

export default class Profile extends Component {
  static navigationOptions = {
    header:null
  };
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Charles NDAYISABA</Text>
              <Text style={styles.info}>UX Designer / Software developer</Text>
              <Text style={styles.description}> I am very passionate about Mobile application development, and strive to better myself as a developer, and the development of my country, Rwanda.</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>ADD WORK</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>ADD RESUME</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: Colors.primary_blue,
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600",
    fontFamily: 'space-mono-bold',
  },
  info:{
    fontSize:14,
    color: Colors.primary_blue,
    marginTop:10,
    fontFamily: 'space-mono',
  },
  description:{
    fontSize:14,
    color: "#696969",
    fontFamily: 'space-mono',
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: Colors.primary_blue,
  },
  buttonText:{
    color:Colors.primary_white,
    fontFamily: 'space-mono-bold',
  }
});