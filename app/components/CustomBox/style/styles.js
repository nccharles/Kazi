import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../../constants/Colors';
const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        borderBottomWidth: .4,
        borderBottomColor: Colors.primary,
        margin: 10,
        paddingHorizontal: 12,
        width: width
    },
    body: {
        fontFamily: 'font-bold',
        fontSize: width / 30,
        padding: 10,
        color: Colors.primary_gray
    },
    top: {
        flexDirection: 'row',
        width: width-12,
        justifyContent: 'space-between',
        padding: 10
    },
    dateSide:{
        flexDirection: 'row',
        marginRight: 10
    },
    date: {
        fontFamily: 'font-bold',
        fontSize: width / 25,
        color: Colors.secondary
    },
    title: {
        fontFamily: 'font-bold',
        fontSize: width / 20,
        color: Colors.primary
    }

})