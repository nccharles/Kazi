import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../constants/Colors';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        color: Colors.primary,
        borderBottomWidth: .4,
        borderBottomColor: Colors.primary,
        marginBottom: height * .05,
        height: height / 16,
        width: width - 50,
        fontFamily: 'font-regulary',
        opacity: 0.6
    },
    Button: {
        backgroundColor: "transparent",
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },

    buttonText: {
        fontFamily: 'font-bold',
        fontSize: width / 20,
        color: Colors.primary
    }

})
