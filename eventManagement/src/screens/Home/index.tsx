import styles from "./styles";
import themes from "../../themes/themes";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Participant } from "../../components/Participant";
import { useState } from "react";
import { DefaultButton } from '../../components/DefaultButton';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Alert,
  NativeSyntheticEvent,
} from "react-native";

export const Home = () => {
  const [participants, setParticipants] = useState<string[]>([]);
  const [newParticipant, SetNewParticipant] = useState("");
  const [eventName, setEventName] = useState("");
  const [ inputFocusedBorder, setInputFocusedBorderColor ] = useState('');

  const inputOnFocus =()=>{
    setInputFocusedBorderColor(themes.colors.purple)
  }
  const inputOnBlur =()=>{
    setInputFocusedBorderColor('')
  }

  const addParticipantHandler = () => {
    if (participants.includes(newParticipant)) {
      SetNewParticipant("");

      return Alert.alert(
        "Participant found.",
        `${newParticipant} is already enrolled on this Event`
      );
    }

    if (!newParticipant.trim()) {
      return Alert.alert("Please enter a participant's name");
    }
    setParticipants((prevState) => [...prevState, newParticipant]);
    SetNewParticipant("");
  };

  const removeParticipantHandler = (participant: string) => {
    Alert.alert(
      "Delete?",
      `Do you want to delete ${participant.toUpperCase()} from this Event ?`,
      [
        {
          text: "Yes",
          onPress: () =>
            setParticipants((prevState) =>
              prevState.filter(
                (currentParticipant) => currentParticipant !== participant
              )
            ),
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  const updateEvent = (event: NativeSyntheticEvent) => {
    setEventName(event.nativeEvent.text);
  };

  return (
    <View style={styles.homeContainer}>
      {!eventName ? (
        <View style={styles.eventContainer}>
          <Text style={styles.eventLabel}>What is your Event's name</Text>
          <TextInput
            onEndEditing={updateEvent}
            style={styles.eventInput}
            placeholder="Tap Event's name, then Enter ->"
            placeholderTextColor={themes.colors.gray}
          />

         
        </View>
      ) : (
        <View>
          <Text style={styles.eventLabel}>{eventName.toUpperCase()}</Text>
          <Text style={styles.eventDate}>Saturday, Feb 4th 2023</Text>
          <View style={styles.form}>
            <TextInput
              style={[styles.input, { borderWidth:1, borderColor: inputFocusedBorder}]}
              placeholder="Type a participant's name"
              placeholderTextColor={themes.colors.gray}
              onChangeText={SetNewParticipant}
              value={newParticipant}
              onFocus={inputOnFocus}
              onBlur={inputOnBlur}
            />
              <DefaultButton
                    color={themes.colors.greenButton} 
                    participantHandler={addParticipantHandler}
                    >
                     
                  <AntDesign name="plus" size={24} color={themes.colors.lightWhite} />
              </DefaultButton>
          </View>

          <FlatList
          contentContainerStyle={{flexGrow:1}}
            data={participants}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Participant
                name={item}
                onRemove={removeParticipantHandler}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View>
                <View style={styles.marginLine}></View>
                <View style={styles.fallbackContainer}>
                  <Text style={styles.emptyListText}>Empty Event list.</Text>
                  <Text style={styles.emptyListText}>
                    Add participants to your{" "}
                    <Text style={styles.eventText}>
                      {eventName.toUpperCase()}
                    </Text>
                  </Text>
                  <View style={styles.listIcon}>
                    <Ionicons
                      name="list-circle-outline"
                      size={80}
                      color={themes.colors.gray}
                    />
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};
