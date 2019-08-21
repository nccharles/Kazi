import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    View,
    Dimensions,
    ScrollView,
    Platform,
    AsyncStorage,
    Alert,
} from 'react-native';
import Toast from 'react-native-easy-toast'
import Spinner from 'react-native-loading-spinner-overlay';
import Form from 'react-native-form';
import CountryPicker from 'react-native-country-picker-modal';
import { LinearGradient } from "expo-linear-gradient";
import { userPhone, userCountry } from '../../constants/util'
//backend imports 
import _ from 'lodash'
import Colors from '../../constants/Colors';
//back end done
const MAX_LENGTH_CODE = 6;
const MAX_LENGTH_NUMBER = 9;
const { width, height } = Dimensions.get('window');
// if you want to customize the country picker
const countryPickerCustomStyles = {};
const getRand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
// your brand's theme primary color
const brandColor = Colors.primary;

const styles = StyleSheet.create({
    countryPicker: {
        alignItems: 'center',
        justifyContent: 'center'

    },
    header: {
        color: brandColor,
        opacity: 1,
        fontFamily: 'font-bold',
        fontSize: width / 25,
        marginTop: height * .1,
        marginLeft: width * .05,
        marginBottom: height * .1,
    },
    container: {
        flex: 1,
    },
    form: {
        margin: 20
    },
    textInput: {
        padding: 0,
        margin: 0,
        flex: 1,
        fontSize: width / 18,
        color: brandColor,
        fontFamily: 'font-bold',
    },
    button: {
        marginTop: 20,
        height: 50,
        backgroundColor: brandColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: Colors.primary_white,
        fontSize: width / 25,
        fontFamily: 'font-bold',
    },
    wrongNumberText: {
        margin: 10,
        fontSize: width / 30,
        textAlign: 'center',
        color: Colors.primary_gray,
        fontFamily: 'font-regulary',
    },
    disclaimerText: {
        marginTop: 30,
        fontSize: width / 35,
        color: Colors.primary_gray,
        fontFamily: 'font-regulary',
    },
    callingCodeView: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    callingCodeText: {
        fontSize: width / 18,
        color: brandColor,
        fontFamily: 'font-bold',
        paddingRight: 10
    }
});

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            enterCode: false,
            spinner: false,
            Code: getRand(191000, 909990),
            Phone: '',
            checked: '',
            confirm: '',
            country: {
                cca2: 'RW',
                name: 'Rwanda',
                callingCode: '250'
            },
        };
    }
    static navigationOptions = ({ navigation }) => {
        let Title = 'Phone'
        return {
            headerTitle: Title,
            headerStyle: {
                backgroundColor: Colors.primary,
                elevation: 0
            },

            headerTintColor: Colors.primary_white,
            headerTitleStyle: {
                fontFamily: 'font-bold',
            },
        }
    };
    _getCode = () => {
        if (this.state.Phone.length !== MAX_LENGTH_NUMBER) {
            this.refs.toast.show('Please add a valid number');
            return;
        }

        this.setState({ spinner: true });
        if (__DEV__) {
            this.setState({
                enterCode: true,
                spinner: false,
                confirm: this.state.Code,
                checked: this.state.Code,
            });
            setTimeout(() => {
                this.refs.toast.show("Sent!: We've sent you a verification code");
            }, 100);
            return
        }
        fetch('https://forexchange-sms.herokuapp.com/Auth', {
            method: 'POST',
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Phone: this.state.country.callingCode + this.state.Phone,
                Code: this.state.Code
            })
        }).then((response) => response.json()).then(async () => {
            this.setState({
                enterCode: true,
                spinner: false,
                confirm: this.state.Code
            });
            setTimeout(() => {
                this.refs.toast.show("Sent!: We've sent you a verification code", () => {
                    () => this.refs.form.refs.textInput.focus()
                });
            }, 100);
        }).catch((error) => {
            this.refs.toast.show(error.message, () => {
                this.setState({ spinner: false });
            });
        });

    }

    _verifyCode = () => {
        let { checked, confirm } = this.state
        this.setState({ spinner: true });
        console.log('Code:' + checked)

        setTimeout(async () => {

            try {

                if (checked != confirm) {
                    this.refs.form.refs.textInput.blur();
                    this.setState({ spinner: false });
                    setTimeout(() => {
                        Alert.alert('Warning!', 'You have entered invalid Code');
                    }, 100);
                } else {
                    this.refs.form.refs.textInput.blur();
                    this.setState({ spinner: false });
                    if (checked) {
                        this.refs.toast.show("You have successfully verified your phone number");
                        try {
                            await AsyncStorage.setItem(userPhone, this.state.country.callingCode + this.state.Phone)
                            .then(() => this.props.navigation.navigate("Signup"))
                        } catch (error) {
                            this.refs.toast.show(error.message, () => {
                                this.setState({ spinner: false });
                            });
                        }
                        return
                    }
                    await AsyncStorage.setItem(userPhone, this.state.country.callingCode + this.state.Phone)
                    await AsyncStorage.setItem(userCountry, this.state.country.name)
                        .then(() => this.props.navigation.navigate('SignScreen'));

                }

            } catch (err) {
                this.setState({ spinner: false });
                setTimeout(() => {
                    this.refs.toast.show(err.message);
                }, 100);
            }

        }, 1000);

    }

    _onChangeText = (val) => {
        if (!this.state.enterCode) {
            this.setState({ Phone: val });
            console.log(this.state.country.callingCode + this.state.Phone);
        } else {
            this.setState({ checked: val });
        }
    }

    _tryAgain = () => {
        this.refs.form.refs.textInput.setNativeProps({ text: '' })
        this.refs.form.refs.textInput.focus();
        this.setState({ enterCode: false });
    }

    _getSubmitAction = () => {
        this.state.enterCode ? this._verifyCode() : this._getCode();
    }

    _changeCountry = (country) => {
        this.setState({ country });
        this.refs.form.refs.textInput.focus();
    }

    _renderFooter = () => {

        if (this.state.enterCode)
            return (
                <View>
                    <Text style={styles.wrongNumberText} onPress={this._tryAgain}>
                        Enter the wrong number or need a new code?
          </Text>
                </View>
            );

        return (
            <View>
                <Text style={styles.disclaimerText}>By tapping "Continue" above, we will send you an SMS to confirm your phone number.</Text>
            </View>
        );

    }

    _renderCountryPicker = () => {

        if (this.state.enterCode)
            return (
                <View />
            );

        return (
            <CountryPicker
                ref={'countryPicker'}
                closeable
                style={styles.countryPicker}
                onChange={this._changeCountry}
                cca2={this.state.country.cca2}
                styles={countryPickerCustomStyles}
                translation='eng' />
        );

    }

    _renderCallingCode = () => {

        if (this.state.enterCode)
            return (
                <View />
            );

        return (
            <View style={styles.callingCodeView}>
                <Text style={styles.callingCodeText}>+{this.state.country.callingCode + '   '}</Text>
            </View>
        );

    }

    render() {
        let headerText = `What's your ${this.state.enterCode ? 'verification code  ' : 'phone number'}?`
        let buttonText = this.state.enterCode ? 'Verify code  ' : 'Continue  ';
        let textStyle = this.state.enterCode ? {
            height: 50,
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 'bold',
        } : {};

        return (

            <View
                onResponderRelease={(event) => { Keyboard.dismiss(); }}
                style={styles.container}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{ flex: 1 }}
                    keyboardVerticalOffset={30}
                >
                    <ScrollView>
                        <Text style={styles.header}>{headerText}</Text>

                        <Form ref={'form'} style={styles.form}>

                            <View style={{ flexDirection: 'row' }}>

                                {this._renderCountryPicker()}
                                {this._renderCallingCode()}

                                <TextInput
                                    ref={'textInput'}
                                    name={this.state.enterCode ? 'code' : 'phoneNumber'}
                                    type={'TextInput'}
                                    underlineColorAndroid={'transparent'}
                                    autoCapitalize={'none'}
                                    autoCorrect={false}
                                    onChangeText={this._onChangeText}
                                    placeholder={this.state.enterCode ? (__DEV__ ? `${this.state.confirm}` : '_ _ _ _ _ _') : 'Phone Number'}
                                    keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
                                    style={[styles.textInput, textStyle]}
                                    returnKeyType='go'
                                    autoFocus={true}
                                    placeholderTextColor={brandColor}
                                    selectionColor={brandColor}
                                    maxLength={this.state.enterCode ? MAX_LENGTH_CODE : MAX_LENGTH_NUMBER}
                                    onSubmitEditing={this._getSubmitAction} />

                            </View>
                            <LinearGradient
                                colors={Colors.primary_gradient}
                                start={{ x: 1.0, y: 0.5 }}
                                end={{ x: 0, y: 0.5 }}
                                style={styles.button}
                            >
                                <TouchableOpacity onPress={this._getSubmitAction}>
                                    <Text style={styles.buttonText}>{buttonText}</Text>
                                </TouchableOpacity>
                            </LinearGradient>
                            {this._renderFooter()}

                        </Form>

                        <Spinner
                            visible={this.state.spinner}
                            textContent={'One moment...  '}
                            textStyle={{ color: Colors.primary }} />

                    </ScrollView>
                    <Toast ref="toast"
                        style={{ backgroundColor: Colors.primary }}
                        position='bottom'
                        positionValue={200}
                        fadeInDuration={750}
                        fadeOutDuration={1000}
                        opacity={0.8}
                        textStyle={{ color: '#fff' }} />
                </KeyboardAvoidingView>
            </View>
        );
    }
}