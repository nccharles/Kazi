import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../../constants/Colors';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderBottomWidth: .3,
        borderBottomColor: Colors.primary_gray,
        marginBottom: 5,
        paddingHorizontal: 12,
        width: width - 20,
    },
    jobContainer: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        paddingHorizontal: 2,
        width: width - 20
    },
    body: {
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        padding: 10,
        marginBottom: 5,
        borderLeftWidth: 2,
        marginLeft: 30,
        borderLeftColor: Colors.primary_gray,
        color: Colors.primary_black,
        opacity: 0.7
    },
    jobDescription: {
        fontFamily: 'font-regulary',
        padding: 0,
        marginBottom: 5,
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
        color: Colors.primary
    }

})