import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { Text, ListItem, Body } from "native-base";
import * as Icon from '@expo/vector-icons'
import Colors from "../constants/Colors";
import styles from "./styles/style"
export default class JobScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Hair", header: true },
        { name: "Hair Cut Man", header: false },
        { name: "Hair Cut for Women", header: false },
        { name: "Home", header: true },
        { name: "House Help(keeper)", header: false },
        { name: "Cook", header: false },
        { name: "Kids Nuny", header: false },
        { name: "Cleaner", header: false },
        { name: "Gardener", header: false },
        { name: "Others", header: true },
        { name: "Craig Weiler", header: false },
        { name: "Handyman", header: false },
        { name: "maintenance worker", header: false },
        { name: "jack-of-all-trades", header: false },
        { name: "journeyman", header: false },
        { name: "Electrician", header: false },
        { name: "Plumber", header: false },
        { name: "Carpenter", header: false },
        { name: "welder - Soudeur", header: false },
        { name: "Peinter", header: false },
        { name: "Pest Control", header: false },
        { name: "Driver", header: false },
        { name: "new", header: false },
      ],
      stickyHeaderIndices: []
    };
  }
  componentWillMount() {
    var arr = [];
    this.state.data.map(obj => {
      if (obj.header) {
        arr.push(this.state.data.indexOf(obj));
      }
    });
    arr.push(0);
    this.setState({
      stickyHeaderIndices: arr
    });
  }
  goBack = Job => {
    const { navigation } = this.props
    navigation.goBack();
    const { setBaseJob } = navigation.state.params
    setBaseJob({ baseJob: Job })
  }
  renderItem = ({ item }) => {
    if (item.header) {
      return (
        <ListItem style={{ marginLeft: 0, backgroundColor: Colors.primary }}>
          <Body style={{ marginLeft: 0 }}>
            <Text style={{ fontFamily: "font-bold", color: Colors.primary_white }}>
              {item.name}
            </Text>
          </Body>
        </ListItem>
      );
    } else if (item.name === "new") {
      return (
        <TouchableOpacity style={styles.caption}>
          <Icon.MaterialCommunityIcons name="briefcase-plus" color={Colors.primary_gray} size={15} />
          <Text style={styles.empty}> add Job</Text>
        </TouchableOpacity>
      )
    } else if (!item.header) {
      return (
        <ListItem style={{ marginLeft: 0 }}>
          <Body>
            <TouchableOpacity onPress={() => this.goBack(item.name)}>
              <Text style={{ fontFamily: "font-regulary", color: Colors.primary_black }}>{item.name}</Text>
            </TouchableOpacity>
          </Body>
        </ListItem>
      );
    }
  };
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.name}
        stickyHeaderIndices={this.state.stickyHeaderIndices}
      />
    );
  }
}