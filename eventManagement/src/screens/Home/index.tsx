import styles from './styles';
import themes from '../../themes/themes';
import { View, Text , TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Participant } from '../../components/Participant';
import { useState } from 'react';

export const Home =()=>{
    const [ participant, setParticipant ] = useState();

const addParticipantHandler =()=>{
    console.log('add')
}
const removeParticipantHandler =()=>{
    console.log('remove from the home screen')
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
            <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            >
            <Participant name="Gilmara" onRemove={removeParticipantHandler}/>
            <Participant name="Gilmara" onRemove={removeParticipantHandler}/>
            <Participant name="Gilmara" onRemove={removeParticipantHandler}/>
            <Participant name="Gilmara" onRemove={removeParticipantHandler}/>
            <Participant name="Gilmara" onRemove={removeParticipantHandler}/>
            <Participant name="Gilmara" onRemove={removeParticipantHandler}/>
            <Participant name="Gilmara" onRemove={removeParticipantHandler}/>
            <Participant name="Gilmara" onRemove={removeParticipantHandler}/>
            <Participant name="Gilmara" onRemove={removeParticipantHandler}/>
            </ScrollView>
           
    </View>)
};