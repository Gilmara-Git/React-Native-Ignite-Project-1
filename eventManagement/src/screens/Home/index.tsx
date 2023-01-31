import styles from './styles';
import themes from '../../themes/themes';
import { View, Text , TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export const Home =()=>{
    const [ participant, setParticipant ] = useState();
    const participants = ['gil', 'Jana','Dayana', 'Poly', 'Aloisio', 'Nilva', 'Rosa', 'Rosaria']
    
    
    const addParticipantHandler =()=>{
    if(participants.includes('gil')){
       return  Alert.alert('Participant found.', 'This person is already enrolled on this Event');
    }

}
    const removeParticipantHandler =(participant : string)=>{
        Alert.alert('Delete?',  `Do you want to delete ${participant}`, [
            {
            text: 'Yes',
            onPress: ()=> Alert.alert(`${participant} was removed from the Event`)    
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
                onChange={addParticipantHandler}
                
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