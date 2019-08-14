import { StyleSheet, Platform, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
// import { Constants } from 'expo';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: Colors.primary_white,
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: Colors.primary_gray,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  logo: {
    color: Colors.primary_black,
    fontSize: 20,
    margin: 10,
    marginLeft: 20,
    fontFamily: 'font-bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabBar: {
    fontFamily: 'font-bold',
    fontSize: 12
  },
  tab: {
    elevation: 3
  },
  topBit: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: Colors.primary_white,
    justifyContent: 'space-between',
    elevation: 3
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  empty: {
    textAlign: 'center',
    color: Colors.primary_gray,
    fontFamily: 'font-italic'
  },
  caption: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  input: {
    color: Colors.primary_white,
    borderRadius: 5,
    marginBottom: height * .05,
    alignSelf: 'center',
    height: height / 16,
    width: width - 50,
    fontFamily: 'font-regulary',
  },
  inputStyle: {
    color: '#333',
    textDecorationLine: 'none',
    fontFamily: 'font-regulary',
  },
  picker: {
    borderRadius: 5,
    color: Colors.primary_white,
    width: width - 60,
    marginHorizontal: width / 12,
    fontFamily: 'font-regulary',
    height: 40,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    borderRightWidth: 1,
    borderRightColor: 'gray',
    borderLeftWidth: 1,
    borderLeftColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});
