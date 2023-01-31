import styles from './styles';
import themes from '../../themes/themes';
import { View, Text , TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export const Home =()=>{
    const [ participants, setParticipants ] = useState<string[]>([]);
    const [ newParticipant, SetNewParticipant ]  = useState('');
  
    
    
    const addParticipantHandler =()=> {
    if(participants.includes(newParticipant)){
       return  Alert.alert('Participant found.', `${newParticipant} is already enrolled on this Event`);
    }

    if(!newParticipant.trim()){
        return Alert.alert("Please enter a participant's name")
    }
    setParticipants((prevState)=>[...prevState, newParticipant])
    SetNewParticipant('')

}
   

    const removeParticipantHandler =(participant : string)=>{
       Alert.alert('Delete?',  `Do you want to delete ${participant}`, [
            {
            text: 'Yes',
            onPress: ()=> setParticipants((prevState)=> prevState.filter(currentParticipant => currentParticipant !== participant))   
             },
             { 
                text: 'Cancel',
                style: 'cancel'
            }
    ])

        
        
    }
    return (
    <View style={styles.homeContainer}>
        <Text 
            style={styles.eventLabel}>
            React Native Conference
            </Text>
        <Text 
            style={styles.eventDate}>
            Saturday, Feb 4th 2023
        </Text>
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Type a participant's name"
                placeholderTextColor={themes.colors.gray}
                onChangeText={SetNewParticipant}
                value={newParticipant}
                
            
                
                />
            <TouchableOpacity
                onPress={addParticipantHandler}
                activeOpacity={0.7}
                style={styles.button}
                >
                <AntDesign name="plus" size={24} color={themes.colors.lightWhite}/>
            </TouchableOpacity>

            </View>

            <FlatList
            data={participants}
            keyExtractor={item => item}
            renderItem={({item})=> (
                <Participant 
                name={item} 
                onRemove={()=>removeParticipantHandler(item)}
                />)}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={()=>(
              
                    <Text style={styles.emptyList}>
                        Add participants. You still don't have anybody on your Event List. 
                    </Text>
          )}
             />
             
    </View>)
};