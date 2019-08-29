import React from "react";
import { View, Dimensions, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Colors from "../constants/Colors";
const { width, height } = Dimensions.get('window');
export default class placesScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  goBack = Loc => {
    const { navigation } = this.props
    navigation.goBack();
    const { setLocation } = navigation.state.params
    setLocation({ JobLocation: Loc })
  }
  render() {
    return (
      <View style={{ paddingTop: 20, flex: 1 }}>
        <GooglePlacesAutocomplete
          placeholder="Search location"
          minLength={2} // minimum length of text to search
          autoFocus={true}
          returnKeyType={"search"}
          listViewDisplayed="false"
          fetchDetails={true}
          renderDescription={row =>
            row.description || row.formatted_address || row.name
          }
          onPress={(data, details = null) => this.goBack(data.description)}
          getDefaultValue={() => {
            return ""; // text input default value
          }}
          query={{
            key: "AIzaSyAN6UG11K2foH4nOXtdr4KMmKnCGi8UQB0",
            language: "en", // language of the results
            types: "(cities)" // default: 'geocode'
          }}

          enablePoweredByContainer={false}
          nearbyPlacesAPI="GoogleReverseGeocoding"
          GooglePlacesSearchQuery={{
            rankby: "distance",
            types: "food"
          }}
          filterReverseGeocodingByTypes={[
            "locality",
            "administrative_area_level_3"
          ]}
          debounce={200}
          styles={{
            textInputContainer: {
              backgroundColor: 'rgba(0,0,0,0)',
              width: width,
              borderTopWidth: 0,
              borderBottomWidth: 0
            },
            description: {
              fontFamily: 'font-bold',
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              color: Colors.primary,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width,
              padding: 10,
              height: height / 16,
              borderBottomWidth: 1,
              borderBottomColor: Colors.primary,
              fontFamily: 'font-bold',
            },
            predefinedPlacesDescription: {
              color: Colors.primary
            },
          }}
          currentLocation={false}
        />
      </View>
    );
  }
}