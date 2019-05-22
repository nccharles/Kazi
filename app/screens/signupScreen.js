import React from 'react';
import { View ,TextInput,Animated,Dimensions,Platform,KeyboardAvoidingView} from 'react-native';
import {LinearGradient} from 'expo'
import Colors from '../constants/Colors';

const arr = [];
for (var i = 0; i < 3; i++) {
  arr.push(i)
};

// Inputs configs
const inputs = [
  {
    placeholder: 'Full Name',
  },
  {
    placeholder: 'Email Address',
  },
  {
    placeholder: 'Password',
  }
];
const screenwidth = Dimensions.get('window').width
export default class App extends React.Component {
  static navigationOptions = {
    header:null
  };
  constructor(props) {
    super(props);
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

  render() {
    const animatedInputs = inputs.map((a, i) => {
      return (
        <Animated.View 
          key={i} 
          style={{
            opacity: this.animatedInputValue[i], // attaching animations to the input opacity
          }} 
        >
          <TextInput
            style={[{ borderColor: '#fff', borderBottomWidth: 1, padding: 5, marginBottom: 30 }]}
            selectionColor="#fff"
            placeholder={a.placeholder}
            placeholderTextColor="#fff"
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
        <View style={{ width: '100%', paddingHorizontal: 25  }}>
          {animatedInputs}
        </View>
        {Platform.OS === 'android' &&
                    <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={screenwidth / 24} />}
      </LinearGradient>
    );
  }
}