import { StyleSheet } from 'react-native';
import themes from '../../themes/themes';

const styles = StyleSheet.create({
    container:{
        // width: '100%',
        flexDirection: 'row',       
        marginBottom:10,
        borderRadius: 5,  
    }, 
    textContainer:{
        backgroundColor: themes.colors.darkerBackground,
        flex:1,    
        borderRadius: 5,     
        flexDirection: 'row',
        alignItems: 'center',
               
    },  
    participantName:{
        color: themes.colors.lightWhite,
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
        fontFamily: themes.fonts.InterBold700
    },
    buttonContainer:{
        marginLeft: 10
    },
    button:{
        height: 58,
        width: 58,
        backgroundColor: themes.colors.pink,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        

    }
})

export default styles;