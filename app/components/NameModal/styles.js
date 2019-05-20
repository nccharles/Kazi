import { Dimensions, Platform, StyleSheet } from 'react-native'
import { Colors } from '../../Assets/Themes'

const screenwidth = Dimensions.get('window').width

export default StyleSheet.create({

    input: {
        height: 40,
        borderBottomWidth: Platform.OS === 'ios' ? 0 : 2,
        borderBottomColor: Colors.secondary,
        width: screenwidth - 70,
        paddingHorizontal: 10,
        fontSize: screenwidth / 25,
        fontFamily: 'space-mono',
    },
    button: {
        fontFamily: 'space-mono',
        color: Colors.primary
    },
    title: {
        fontFamily: 'space-mono-Bold',
        color: Colors.primary
    },
    details: {
        fontFamily: 'space-mono',
        color: Colors.darkGray
    }
})
