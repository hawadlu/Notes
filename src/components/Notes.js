import React, {Component} from 'react';
import {Alert, Text, Button, KeyboardAvoidingView, StyleSheet, TextInput, View, Dimensions} from 'react-native';

var windowWith = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;
var heightEighth = windowHeight / 8;

const createTwoButtonAlert = () =>
    Alert.alert(
        'ALERT',
        'Button was clicked',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
    );

const createThreeButtonAlert = () =>
    Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
            {
                text: 'Ask me later',
                onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
    );

export default class NotesView extends Component {
    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
                enabled={Platform.OS === 'ios' ? true : false}>

                {/*The controls for each note*/}
                <View style={styles.nav}>
                    <Text>This is where the buttons go</Text>
                </View>

                {/*The area where the note is typed*/}
                <TextInput
                    style={styles.textArea}
                    defaultValue= {"Width: " + Dimensions.get('window').height}
                />


                {/*<View style={styles.navContainer}>*/}
                {/*    <Button*/}
                {/*        style={[styles.navButton]}*/}
                {/*        title="Aspirational Button"*/}
                {/*        onPress={() => createTwoButtonAlert()*/}
                {/*        }*/}
                {/*    />*/}
                {/*    <Button*/}
                {/*        style={[styles.navButton]}*/}
                {/*        title="Aspirational Button 2"*/}
                {/*        onPress={() => createThreeButtonAlert()}*/}
                {/*    />*/}
                {/*</View>*/}
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nav: {
        height: heightEighth,
        width: windowWith,
        alignSelf: 'stretch',
        backgroundColor: '#2196F3',
    },
    textArea: {
        height: heightEighth * 7,
        width: windowWith,
        alignSelf: 'stretch',
        backgroundColor: '#8BC34A',
    },
});
