import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView
} from "react-native";
import _ from "lodash";
import { ListItem, SearchBar } from "react-native-elements";
import { List } from 'native-base';
import { Icon } from 'expo';
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
            <TouchableOpacity onPress={() => alert('done')} >
              <Icon.Entypo name="chat" color={Colors.primary_white} size={23} style={{ padding: 20 }} />
            </TouchableOpacity>
          </View>
        </View>
        <SearchBar ref={search => this.search = search} value={search} onChangeText={this.handleSearch} placeholder="Search..." lightTheme />
        <SafeAreaView>
          <List>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <ListItem
                  roundAvatar
                  title={`${item.name.first} ${item.name.last}`}
                  subtitle={item.email}
                  avatar={{ uri: item.picture.thumbnail }}
                  containerStyle={{ borderBottomWidth: 0 }}
                />
              )}
              keyExtractor={item => item.email}
              ItemSeparatorComponent={this.renderSeparator}
              ListFooterComponent={this.renderFooter}
            />
          </List>
        </SafeAreaView>
      </View>

    );
  }
}
