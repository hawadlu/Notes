import React from 'react';
import {Alert, Button, Text, TextInput, View} from 'react-native';

const createTwoButtonAlert = () =>
    Alert.alert(
        "ALERT",
        "Button was clicked",
        [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
    );

const createThreeButtonAlert = () =>
    Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
            {
                text: "Ask me later",
                onPress: () => console.log("Ask me later pressed")
            },
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
    );

const NotesView = () => {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            height: "100%",
            width: "100%"}}>
            <Button
                title="Aspirational Button"
                onPress={() => createTwoButtonAlert()
                }
            />
            <TextInput
                style={{
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="I am a UselessTextInput"
            />
        </View>
    );
}

export default NotesView;
