import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native'
import { userChoice, userPhone } from './constants/util';
import Colors from './constants/Colors';
import * as firebase from 'firebase'
import AppContainer from './navigation/AppNavigator';
import { NavigationActions } from 'react-navigation';
export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			checkedSignIn: false,
		};
	}

	async componentDidMount() {
		firebase.initializeApp({
			apiKey: "AIzaSyCt0uUN0ahM7XxBQmcoBjEUHdUpB0Z5FZk",
			authDomain: "kazi-3b634.firebaseapp.com",
			databaseURL: "https://kazi-3b634.firebaseio.com",
			projectId: "kazi-3b634",
			storageBucket: "kazi-3b634.appspot.com",
			messagingSenderId: "184397159584"
		});
		const retrieveduserChoice = await AsyncStorage.getItem(userChoice);
		const userPhoneNumber = await AsyncStorage.getItem(userPhone)
		setTimeout(() => {
			if (retrieveduserChoice === 'true') {
				this.setState({
					checkedSignIn: true,
				})
				this.navigator &&
					this.navigator.dispatch(
						NavigationActions.navigate({ routeName: "TabScreen" })
					);
			} else if (userPhoneNumber) {
				this.setState({
					checkedSignIn: true,
				})
				this.navigator &&
					this.navigator.dispatch(
						NavigationActions.navigate({ routeName: "Signup" })
					);
			} else {
				this.setState({
					checkedSignIn: true,
				})
				this.navigator &&
					this.navigator.dispatch(
						NavigationActions.navigate({ routeName: "IntroScreen" })
					);
			}
		}, 5000)

	}

	render() {
		const { checkedSignIn } = this.state
		if (!checkedSignIn) {
			return (
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<ActivityIndicator size="large" color={Colors.secondary} />
				</View>
			)
		}

		return (
			<AppContainer ref={nav => {
				this.navigator = nav;
			}} />
		);
	}
}
