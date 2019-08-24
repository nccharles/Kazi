import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Platform,
  Alert,
} from "react-native";
import _ from "lodash";
import * as Icon from '@expo/vector-icons'
import Colors from '../constants/Colors';
import styles from './styles/style'
import { getUsers, contains } from '../data/index';
export default class ChatsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      query: "",
      fullData: [],
      error: null
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = _.debounce(() => {
    this.setState({ loading: true });

    getUsers(20, this.state.query)
      .then(users => {
        this.setState({
          loading: false,
          search: '',
          data: users,
          fullData: users
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });

  }, 250);
  handleSearch = text => {
    this.setState({search:text})
    const formatQuery = text.toLowerCase();
    const data = _.filter(this.state.fullData, user => {
      return contains(user, formatQuery);
    })
    this.setState({query: formatQuery, data }, () => this.makeRemoteRequest());
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };


  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };
  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topBit}>
          <Text style={styles.logo}>Chats</Text>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => Alert.alert('Chats','No Chats yet.')} >
              <Icon.Ionicons name={Platform.os==='ios'?'ios-add-circle-outline':'md-add-circle-outline'} color={Colors.primary} size={20} style={{ padding: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
         <View style={styles.caption}>
        <Text style={styles.empty}>No Chats yet!</Text>
      </View>
      </View>

    );
  }
}
