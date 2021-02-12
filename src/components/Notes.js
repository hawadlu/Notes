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
                style={pageStyles.pageContainer}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
                enabled={Platform.OS === 'ios' ? true : false}>

                {/*The controls for each note*/}
                <View style={pageStyles.pageNav}>
                    <View style={controlStyles.navContainer}>
                        <Button
                            style={controlStyles.homeArea}
                            onPress={() => this.props.navigate('Home')}
                            title="Home"
                            color="#841584"
                            accessibilityLabel="Go home"
                        />
                        <Text style={controlStyles.buttonArea}>The control buttons go in here somewhere </Text>
                    </View>
                </View>

                {/*The area where the note is typed*/}
                <TextInput
                    style={pageStyles.pageTextArea}
                    defaultValue= {"Width: " + Dimensions.get('window').width}
                />
            </KeyboardAvoidingView>
        );
    }
}


const pageStyles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageNav: {
        height: heightEighth,
        width: windowWith,
        alignSelf: 'stretch',
        backgroundColor: '#2196F3',
    },
    pageTextArea: {
        height: heightEighth * 7,
        width: windowWith,
        alignSelf: 'stretch',
        backgroundColor: '#8BC34A',
    },
});

const controlStyles = StyleSheet.create({
    navContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    homeArea: {
        width: windowWith,
        alignSelf: 'stretch',
        backgroundColor: '#320a41',
    },
    buttonArea: {
        height: 100,
        width: windowWith,
        alignSelf: 'stretch',
        backgroundColor: '#c31b1b',
    }
})
