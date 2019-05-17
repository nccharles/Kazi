import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
const styles = StyleSheet.create({
    //Swiper
    slide: {
        flex: 1,                    // Take up all screen
        justifyContent: 'center',   // Center vertically
        alignItems: 'center',       // Center horizontally
    },
    // Header styles
    header: {
        color: Colors.primary_white,
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'space-mono',
        marginVertical: 15,
    },
    // Text below header
    text: {
        color: Colors.primary_white,
        fontFamily: 'space-mono',
        fontSize: 18,
        marginHorizontal: 40,
        textAlign: 'center',
    },
});

export default styles