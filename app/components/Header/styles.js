
import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors';

const screenWidth = Dimensions.get('window').width
const screenheight = Dimensions.get('window').height

export default StyleSheet.create({

    container: {
        backgroundColor: Colors.primary_white,
        height: screenheight / 10,
        width: screenWidth,
        elevation: 3,
    },
    forex: {
        backgroundColor: Colors.primary,
        height: screenheight / 8,
        width: screenWidth,
        elevation: 0,
    },
    wrapper: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 15,
    },
    title: {
        color: Colors.primary,
        fontSize: screenWidth / 20,
        fontWeight: '500',
        marginLeft: 15
    },
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        right: 25
    },
    ChatStatus: {
        flexDirection: 'column',
        color: Colors.primary,
        marginLeft: 15,
        top: -2,
        fontFamily: 'space-mono-bold',
        marginBottom: 6,
    },
    forexInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 50,
        paddingRight: 10
    },
    chattitle: {
        color: Colors.primary,
        fontFamily: 'space-mono-bold',
    },
    forexTitle: {
        color: Colors.primary,
        fontSize: screenWidth / 20,
        marginRight: 20,
        fontFamily: 'space-mono-bold',
    },
    forexOptions: {
        fontSize: 12,
        resizeMode: "contain",
        width: screenWidth / 18,
        height: screenWidth / 18,
    },
    StatusText: {
        color: Colors.primary,
    },
    button: {
        marginRight: 35
    },
    image1: {
        tintColor: Colors.primary,
        width: screenWidth / 14,
        height: screenWidth / 14,
        marginVertical: 2.5
    },
    image2: {
        tintColor: Colors.primary,
        width: screenWidth / 16,
        height: screenWidth / 16,
        marginVertical: 5
    },
})
