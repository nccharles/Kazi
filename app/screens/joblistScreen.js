import React from "react";
import { FlatList,TouchableOpacity } from "react-native";
import { Text, ListItem, Left, Body, Icon, Right, Title } from "native-base";
export default class JobScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Business", header: true },
        { name: "Commercial Model", header: false },
        { name: "Makeup Artist", header: false },
        { name: "Musician", header: false },
        { name: "Photographer", header: false },
        { name: "Car Washing Service", header: false },
        { name: "Detailing Service", header: false },
        { name: "Coffee Cart Operator", header: false },
        { name: "Meal Preparation Service", header: false },
        { name: "Housekeeper", header: false },
        { name: "Child Care Service", header: false },
        { name: "Home Cleaning Service", header: false },
        { name: "Pool Cleaner", header: false },
        { name: "Furniture Maker", header: false },
        { name: "Blogger", header: false },
        { name: "Interior Decorator", header: false },
        { name: "eBook Author", header: false },
        { name: "Podcaster", header: false },
        { name: "Resume Service", header: false },
        { name: "Scrapbook Maker", header: false },
        { name: "Proofreader", header: false },
        { name: "Translator", header: false },
        { name: "Clothing Alterations Service", header: false },
        { name: "Event Planner", header: false },
        { name: "Antique Refurbisher", header: false },
        { name: "T-shirt Designer", header: false },
        { name: "IT", header: true },
        { name: "Software development", header: false },
        { name: "UI designer", header: false },
        { name: "UX Desiner", header: false },
        { name: "Front-End developer", header: false },
        { name: "Back-End Developer", header: false },
        { name: "Personal Development", header: true },
        { name: "Web Designer", header: false },
        { name: "UX /UI Design", header: false },
        { name: "Game Development", header: false },
        { name: "Earn Money", header: false },
        { name: "Marketing", header: true },
        { name: "Social Media Influencer", header: false },
        { name: "Ecommerce Reseller", header: false },
        { name: "Training", header: true },
        { name: "Yoga Training", header: false },
        { name: "Haircut Training", header: false },
        { name: "Mechanical Training", header: false },
        { name: "Coding Training", header: false },
        { name: "Music Teacher", header: false },
        { name: "Dance Instructor", header: false },
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
    const { setBaseJob} = navigation.state.params
      setBaseJob({ baseJob: Job })
  }
  renderItem = ({ item }) => {
    if (item.header) {
      return (
        <ListItem itemDivider>
          <Left />
          <Body style={{ marginRight: 40 }}>
            <Text style={{ fontWeight: "bold" }}>
              {item.name}
            </Text>
          </Body>
          <Right />
        </ListItem>
      );
    } else if (!item.header) {
      return (
        <ListItem style={{ marginLeft: 0 }}>
          <Body>
            <TouchableOpacity onPress={() => this.goBack(item.name)}>
            <Text>{item.name}</Text>
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