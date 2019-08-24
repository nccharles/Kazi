
import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors';

const screenWidth = Dimensions.get('window').width
const screenheight = Dimensions.get('window').height

export default StyleSheet.create({

    container: {
        backgroundColor: Colors.primary,
        height: screenheight / 10,
        width: screenWidth,
        elevation: 1,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 10
    },
    title: {
        color: Colors.primary_white,
        fontSize: screenWidth / 20,
        marginLeft: 30,
        fontFamily: 'font-bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        right: 25
    },
    ChatStatus: {
        flexDirection: 'column',
        color: Colors.primary_white,
        marginLeft: 30,
        top: -2,
        fontFamily: 'font-bold',
        marginBottom: 6,
    },
    chattitle: {
        color: Colors.primary_white,
        fontFamily: 'font-bold',
    },
    StatusText: {
        color: Colors.primary_white,
    },
    button: {
        marginRight: 35
    },
    image1: {
        tintColor: Colors.primary_white,
        width: screenWidth / 14,
        height: screenWidth / 14,
        marginVertical: 2.5
    },
    image2: {
        tintColor: Colors.primary_white,
        width: screenWidth / 16,
        height: screenWidth / 16,
        marginVertical: 5
    },
})
