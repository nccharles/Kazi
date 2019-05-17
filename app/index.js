import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native'
import { userChoice } from './constants/util';
import Colors from './constants/Colors';
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
		
        const retrieveduserChoice = await AsyncStorage.getItem(userChoice);
        setTimeout(() => {
		if (retrieveduserChoice === 'true') {
			this.setState({
				checkedSignIn: true,
            })
            this.navigator &&
            this.navigator.dispatch(
              NavigationActions.navigate({ routeName: "TabScreen" })
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
    },5000)

	}

	render() {
		const { checkedSignIn } = this.state
		if (!checkedSignIn) {
			return (
				<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
					<ActivityIndicator size="large" color={Colors.primary_green} />
				</View>
			)
		}

		return (
			<AppContainer ref={nav => {
                this.navigator = nav;
              }}/>
		);
	}
}
