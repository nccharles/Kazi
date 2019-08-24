import { StyleSheet, Platform, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';
// import { Constants } from 'expo';
const { width, height } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: Colors.primary_white,
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
    color: Colors.primary_gray,
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
        shadowColor: Colors.primary_black,
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 1,
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
    color: Colors.primary,
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
    elevation: 1,
  },
  topBit: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
    backgroundColor: Colors.primary_white,
    justifyContent: 'space-between',
    elevation: 1
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
    borderRadius: 5,
    marginBottom: height * .05,
    height: height / 16,
    borderBottomColor: Colors.primary,
    borderBottomWidth: .4,
  },
  inputStyle: {
    color: Colors.primary,
    textDecorationLine: 'none',
    alignSelf: 'center',
    alignItems: 'flex-start',
    fontFamily: 'font-regulary',
  },
  containerStyle: {
    width: width,
    borderBottomWidth: 0,
    padding: 0
  },
  inputDescription: {
    color: Colors.primary_black,
    marginBottom: height * .12,
    alignSelf: 'flex-start',
    width: width - 50,
    borderBottomWidth: .4,
    borderBottomColor: Colors.primary,
    fontFamily: 'font-regulary',
  },

  infoWithIcon: {
    flexDirection: 'row',
  },
  aboutText: {
    color: Colors.primary,
    fontFamily: 'font-bold',
    fontSize: width / 20
  },
});
