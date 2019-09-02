import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../../constants/Colors';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.primary_white,
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomWidth: .2,
        borderBottomColor: Colors.primary_gray,
        // marginBottom: .5,
        paddingHorizontal: 20,
        width: width,
        elevation: 3,
    },
    jobContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        paddingHorizontal: 5,
        width: width - 20
    },
    body: {
        flexDirection: 'column',
        alignItems: 'baseline',
        padding: 0,
        paddingHorizontal: 10,
        marginBottom: 5,
        marginLeft: 30,
        color: Colors.primary_black
    },
    jobDescription: {
        fontFamily: 'font-regulary',
        paddingHorizontal: 10,
        borderLeftWidth: 2,
        borderLeftColor: Colors.primary_gray,
        marginLeft: -2,
        marginBottom: 0,
        fontSize: width / 35,
        opacity: 0.7
    },
    top: {
        flexDirection: 'row',
        marginLeft: 20,
        width: 'auto',
        marginRight: 10,
        justifyContent: 'space-between',
        padding: 10
    },
    date: {
        fontFamily: 'font-italic',
        fontSize: width / 30,
        color: Colors.secondary,
        opacity: 0.5
    },
    title: {
        fontFamily: 'font-bold',
        fontSize: width / 30,
        color: Colors.primary_black
    },
    Jobside: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    jobTitle: {
        fontFamily: 'font-bold',
        fontSize: width / 35,
        color: Colors.primary
    },
    profile: {
        paddingHorizontal: 5,
        paddingLeft: 20
    },
    deadSide:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        opacity: .6,
        padding: 0
    },
    deadline: {
        color: Colors.primary,
        fontSize: width / 35,
        fontFamily: 'font-regulary'
    }

})