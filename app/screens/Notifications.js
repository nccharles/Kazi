import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Keyboard,
  Alert,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'expo';
import styles from './styles/style'
import Colors from '../constants/Colors';
import Header from '../components/Header/Notifications';
export default class NotificationScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
       <Header 
       onPress2={() => this.props.navigation.goBack()}
       onPress1={() => Alert.alert('Settings','All clear, captain!')}
       source={()=><TouchableOpacity onPress={() => alert('done')} >
       <Icon.Ionicons name={Platform==='ios'?'ios-more':'md-more'} color={Colors.primary} size={20} style={{ padding: 20 }} />
     </TouchableOpacity>
    } 
       />
       <View style={styles.caption}>
        <Text style={styles.empty}>All clear, captain!</Text>
      </View>
      </View>
    );
  }
}
