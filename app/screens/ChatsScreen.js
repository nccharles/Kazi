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
import {  ListItem, SearchBar } from "react-native-elements";
import {  List } from 'native-base';
import { Icon } from 'expo';
import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import styles from './styles/style'
import { getUsers } from '../data/index';
export default class ChatsScreen extends React.Component {
  static navigationOptions = {
    header: null,
    };
    constructor(props) {
      super(props);
  
      this.state = {
        loading: false,
        data: [],
        error: null
      };
    }
  
    componentDidMount() {
      this.makeRemoteRequest();
    }
  
    makeRemoteRequest = () => {
      this.setState({ loading: true });
  
      getUsers()
        .then(users => {
          this.setState({
            loading: false,
            data: users
          });
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    };
  
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
  
    renderHeader = () => {
      return <SearchBar placeholder="Type Here..." lightTheme round />;
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
    return (
        <View style={styles.container}>
         <View style={styles.topBit}>
        <Text style={styles.logo}>Chats</Text>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>alert('done')} >
            <Icon.Entypo name="chat" color={Colors.primary_white} size={23} style={{ padding: 20 }} />
          </TouchableOpacity>
        </View>
      </View>
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
              ListHeaderComponent={this.renderHeader}
              ListFooterComponent={this.renderFooter}
            />
          </List>
          </SafeAreaView>
          </View>
          
    );
  }
}
