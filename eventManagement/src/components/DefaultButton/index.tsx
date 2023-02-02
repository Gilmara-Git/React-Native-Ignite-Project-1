import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './styles'


interface DefaultButtonProps extends TouchableOpacityProps{
    participantHandler?: ()=> void;  
    children: React.ReactNode;
    color: string
}

export const DefaultButton =({ participantHandler , color, children, ...rest }: DefaultButtonProps)=>{

    return (    
    <TouchableOpacity
    {...rest}
        onPress={participantHandler}
        activeOpacity={0.7}
        style={[styles.button, {backgroundColor: color}]}
        >
       { children }
    </TouchableOpacity>
)
}