import { StyleSheet } from 'react-native';
import themes from '../../themes/themes';

const styles = StyleSheet.create({
    container:{
        backgroundColor: themes.colors.inputBackground,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom:10
        
        
    },   
    participantName:{
        color: themes.colors.lightWhite,
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
        fontFamily: themes.fonts.InterBold700
    },
    button:{
        height: 58,
        width: 58,
        backgroundColor: themes.colors.minusButtonColor,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'

    }
})

export default styles;