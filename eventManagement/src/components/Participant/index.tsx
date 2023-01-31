import { View, Text , TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import themes from '../../themes/themes';
import styles from './styles';

interface ParticipantProps {
    name: string;
    onRemove: ()=> void;
}

export const Participant =({ name , onRemove}: ParticipantProps)=>{
   
    return(
        <View style={styles.container}>         
                
            <Text style={styles.participantName}>{name}</Text>
         
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={onRemove}
            >
                <Ionicons name='trash-outline' size={24} color={themes.colors.lightWhite} />
            </TouchableOpacity>

        </View>
    )

}