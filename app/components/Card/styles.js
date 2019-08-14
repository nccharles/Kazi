import { Dimensions, StyleSheet } from 'react-native'
import { Colors } from '../../Assets/Themes'

const screenwidth = Dimensions.get('window').width
const screenheight = Dimensions.get('window').height

export default StyleSheet.create({
  row: {
    flex: 1,
    alignSelf: 'center',
    width: screenwidth - 5,
    height: screenheight / 8,
    backgroundColor: Colors.primaryWhite,
    marginVertical: 5
  },
  left: {
    width: 20,
    backgroundColor: Colors.primary,
    borderRadius: 30,
    marginLeft: -12
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 4,
  },
  leftCategory: {
    position: 'absolute',
    left: 15,
    bottom: 1
  },
  boldLabel: {
    position: 'absolute',
    left: 15,
    top: 8,
    fontSize: screenwidth / 25,
    fontFamily: 'font-bold',
    color: Colors.primaryBlack,

  },
  label: {
    color: Colors.primaryGray,
    fontSize: screenwidth / 30,
    position: 'absolute',
    left: 15,
    bottom: 15,
    fontFamily: 'font-bold',
  },
  label2: {
    color: Colors.primaryGray,
    fontSize: screenwidth / 30,
    position: 'absolute',
    left: 15,
    bottom: 0,
    fontFamily: 'font-bold',
  },
  icon_btn: {
    position: "absolute",
    bottom: 0,
    left: 30
  },
  amount: {
    fontSize: screenwidth / 30,
    color: Colors.darkGray,
    fontFamily: 'font-bold',
  },
  time: {
    fontSize: screenwidth / 30,
    color: Colors.secondary,
    top: 2,
    fontFamily: 'font-regulary',
  },
  currencyName: {
    fontSize: screenwidth / 30,
    color: Colors.darkGray,
    fontFamily: 'font-bold',
    marginLeft: 5
  },
  rightContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  rightCategory: {
    fontSize: screenwidth / 30,
    color: Colors.primaryBlack,
    fontFamily: 'font-bold',
    position: 'absolute',
    right: 15,
    top: 10
  },
  flag_icon: {
    width: screenwidth / 12,
    height: screenheight / 20,
    backgroundColor: 'transparent',
    position: 'absolute',
    right: 15
  },
  equivalentContainer: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    flexDirection: 'row'
  },
  updated: {
    position: 'absolute',
    right: 15,
    bottom: 0,
    color: Colors.secondary,
    fontSize: screenwidth / 35,
    fontFamily: 'font-bold',
  },
  parent: {
    flex: 1,
    width: screenwidth - 30,
    height: screenheight / 10,
    flexDirection: 'row',
    backgroundColor: Colors.primaryWhite,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginVertical: screenwidth - (screenwidth - 5),
  },
  imageContainer: {
    borderWidth: 0.5,
    width: screenwidth / 6,
    height: screenheight / 17,
    marginLeft: screenwidth - (screenwidth - 8),
    justifyContent: 'center',
    alignSelf: 'center'
  },
  leftRectangular: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  FlagContainer: {
    width: screenwidth / 8,
    height: screenheight / 19,
    marginLeft: 5,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  leftFlag: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imageChatContainer: {
    borderWidth: 0,
    width: screenwidth / 8,
    height: screenwidth / 8,
    borderRadius: screenwidth / 8,
    marginLeft: 8,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  leftCircle: {
    fontSize: screenwidth / 20,
    color: Colors.primaryWhite,
    textAlign: 'center',
    fontFamily: 'font-bold',
  },
  center: {
    height: '100%',
    flex: 0.90,
    flexDirection: 'column',
    paddingHorizontal: 5,
    backgroundColor: Colors.primaryWhite,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  titleContainer: {
    justifyContent: 'center'
  },
  subTitleContainer: {
    justifyContent: 'center'
  },
  title: {
    color: Colors.primaryBlack,
    fontSize: screenwidth / 25,
    fontFamily: 'font-regulary',
  },
  subTitle: {
    color: Colors.primaryGray,
    fontSize: screenwidth / 35,
    fontFamily: 'font-regulary',
  },
  right: {
    height: '100%',
    position: 'absolute',
    paddingRight: 0,
    right: 0,
    top: 0,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.primaryWhite,
  },
  senttime: {
    paddingRight: 0,
    flexDirection: 'column',
    paddingVertical: 0,
    justifyContent: 'space-evenly',
    backgroundColor: Colors.primaryWhite,
  },
  message: {
    justifyContent: 'flex-end',
    marginRight: 0,
    marginBottom: 0,
  },
  separator: {
    flex: 1,
    height: 0.5,
    width: screenwidth,
    backgroundColor: Colors.lightGray,
    // margin: 8
  },
  Currenciesseparator: {
    flex: 1,
    height: 1,
    width: screenwidth - 5,
    backgroundColor: 'transparent',
    // margin: 8
  },
  Chatseparator: {
    flex: 1,
    height: 1,
    width: screenwidth - 10,
    backgroundColor: 'transparent',
    marginLeft: screenwidth / 5
  }

});
