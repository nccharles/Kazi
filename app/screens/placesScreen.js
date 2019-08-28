import React from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
/*
The component is child component for location search 
the selected location can be stored in state variable
*/
export default class placesScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ paddingTop: 20, flex: 1 }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={2} // minimum length of text to search
          autoFocus={false}
          returnKeyType={"search"}
          listViewDisplayed="false"
          fetchDetails={true}
          renderDescription={row =>
            row.description || row.formatted_address || row.name
          }
          onPress={(data, details = null) => {
            this.props.handler(data.description)
}}
          getDefaultValue={() => {
            return ""; // text input default value
          }}
          query={{
            key: "AAIzaSyArRwHRrKfyvF9zq4RRtI5NB_YNJ4Cl3Ug",
            language: "en", // language of the results
            types: "(cities)" // default: 'geocode'
          }}
          styles={{
            description: {
              fontWeight: "bold"
            },
            predefinedPlacesDescription: {
              color: "#1faadb"
            }
          }}
          enablePoweredByContainer={true}
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
              borderTopWidth: 0,
              borderBottomWidth:0
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: 38,
              color: '#5d5d5d',
              fontSize: 16
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            },
          }}
        />
      </View>
    );
  }
}