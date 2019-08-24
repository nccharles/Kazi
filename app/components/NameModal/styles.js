import { Dimensions, Platform, StyleSheet } from 'react-native'
import { Colors } from '../../assets/Themes'

const screenwidth = Dimensions.get('window').width

export default StyleSheet.create({

    input: {
        height: 40,
        borderBottomWidth: Platform.OS === 'ios' ? 0 : 2,
        borderBottomColor: Colors.secondary,
        width: screenwidth - 70,
        paddingHorizontal: 10,
        fontSize: screenwidth / 25,
        fontFamily: 'font-regulary',
    },
    button: {
        fontFamily: 'font-regulary',
        color: Colors.primary
    },
    title: {
        fontFamily: 'font-bold',
        color: Colors.primary
    },
    details: {
        fontFamily: 'font-regulary',
        color: Colors.darkGray
    }
})
