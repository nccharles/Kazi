import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainHeader from '../components/Header/mainHeader';

export default class jobDetails extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <MainHeader headerName={this.props.navigation.state.params.Job}
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
