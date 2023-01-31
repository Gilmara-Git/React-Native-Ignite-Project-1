import { StyleSheet } from 'react-native';
import themes from '../../themes/themes';

const styles = StyleSheet.create({
    homeContainer:{
        padding: 24,
        backgroundColor: themes.colors.background,
        flex:1

    }, 
    eventLabel:{
        color: themes.colors.lightWhite,
        fontSize:24,
        fontWeight: 'bold',
        fontFamily: themes.fonts.InterBold700,
        marginTop:48
    },
    eventDate:{
        color: themes.colors.gray,
        fontSize: 16
    }, 
    input:{
        height: 58,
        backgroundColor: themes.colors.inputBackground,
        borderRadius: 5,
        color: themes.colors.lightWhite,
        padding: 10,
        fontSize: 16,
        flex:1,
        marginRight: 10,
        fontFamily: themes.fonts.InterRegular400
        
    },
    form:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 36,
        marginBottom: 42,
        width: '100%'

    },
    button:{
        height: 58,
        width: 58,
        backgroundColor: themes.colors.rocket,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollViewContainer:{
        paddingBottom: 50
    },
    emptyList:{
        fontSize: 16,
        color: themes.colors.lightWhite,
        fontFamily: themes.fonts.InterBold700,
        textAlign: 'center'
    }

});

export default styles;