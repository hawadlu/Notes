/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import * as React from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, Alert} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NotesView from "./src/components/Notes";
import Search_bar from "./src/components/Search_bar";

/**
 * Home screen - Select a note to edit, open selected note.
 *
 * @param navigation
 * @returns {JSX.Element}
 * @constructor
 */
function HomeScreen({navigation}) {
    return (
        <View style={homeStyles.container}>
            <View style={homeStyles.div_top}>
                <Search_bar> </Search_bar>
                <TouchableOpacity onPress={() => navigation.navigate('Notes')} >
                    <Image
                        source = {{ uri: 'https://raw.githubusercontent.com/hawadlu/Notes/main/images/add_button.png'}}
                        style = {homeStyles.add_button}
                    />
                </TouchableOpacity>
            </View>
            <View style={homeStyles.div_bottom}>
                <ScrollView>
                    <Text style={homeStyles.text_styles}>Hello</Text>
                </ScrollView>
            </View>
        </View>
    );
}

function NotesScreen({navigation}) {
    const {navigate} = useNavigation();
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <NotesView navigate={navigate}> </NotesView>
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRoutename = "Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Notes" component={NotesScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

/**
 * Dimension variables for screen styles.
 */
var {height} = Dimensions.get('window');
var {width} = Dimensions.get('window').width;
var eighth_height = height/8;
var tenth_height = height/12;

/**
 * Styles for the home screen.
 */
const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    div_top: {
        height: eighth_height,
        width: width,
        alignSelf:'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#8527e3'
    },
    div_bottom: {
        height: eighth_height*7,
        width: width,
        alignSelf:'stretch',
        backgroundColor: '#ffffff',
        borderColor: '#e3e3e3',
        borderWidth: 10
    },
    add_button: {
        height: tenth_height,
        width: tenth_height,
        marginLeft: 50
    },
    text_styles: {
      fontFamily: "Roboto",
      fontSize: 20
    }
});

/**
 * Creating a text file
 */
var RNFS = require('react-native-fs');

var path = RNFS.DocumentDirectoryPath + '/test.txt';

// write the file
RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
    .then((success) => {
        Alert.alert('FILE WRITTEN!');
    })
    .catch((err) => {
        Alert.alert(err.message);
    });

export default App;
