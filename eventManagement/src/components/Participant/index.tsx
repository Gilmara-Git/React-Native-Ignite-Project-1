import { View, Text  } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import themes from '../../themes/themes';
import styles from './styles';
import { DefaultButton } from '../../components/DefaultButton';

interface ParticipantProps {
    name: string;
    onRemove: ( name: string)=> void;
}

export const Participant =({ name , onRemove}: ParticipantProps)=>{
   
    return(
        <View style={styles.container}>  
            <View style={styles.textContainer}>
                <Text style={styles.participantName}>
                    {name.toUpperCase()}
                </Text>
            </View>       
                
         <View style={styles.buttonContainer}>
         <DefaultButton
                    color={themes.colors.pink} 
                    participantHandler={onRemove.bind(null, name)}
                    
                    >
                     
                     <Ionicons name='trash-outline' size={24} color={themes.colors.lightWhite} />
              </DefaultButton>
           

        </View>
        </View>
    )

}