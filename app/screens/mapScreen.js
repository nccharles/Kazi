import React, { Component } from 'react';
import {
  Image, AsyncStorage,
  Platform, Text, View, ActivityIndicator, Dimensions
} from 'react-native'
import Toast from 'react-native-easy-toast'
import { Location, Permissions, MapView } from 'expo';
import Colors from '../constants/Colors'
import styles from './styles/style'
import _ from 'lodash'
let { width, height } = Dimensions.get('window')
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.20003
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
class MapScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      coords: {},
      selectedMarker: ''
    };
  }
  static navigationOptions = {
    header: null
  };


  componentWillMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.refs.toast.show('Enable to Access your location');
    }
    const { coords } = await Location.getCurrentPositionAsync({});
    this.setState({ coords });
    
  };
 
  render() {
    const { coords: { longitude, latitude } } = this.state
    return (
      <View style={styles.container}>
        {
          !latitude ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={Colors.primary} />
          </View>:
          latitude && <MapView
            style={styles.map}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
          >
           
            <MapView.Marker coordinate={{ latitude, longitude }}
              title={"Here you are!."} pinColor={"green"} />
          </MapView>
        }
        <Toast ref="toast"
          style={{ backgroundColor: Colors.primary }}
          position='bottom'
          positionValue={200}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: '#fff' }} />
      </View>
    );
  }
}
export default MapScreen