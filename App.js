/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import * as React from 'react';
import {Button, View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import NotesView from './src/components/Notes';
import Luke from './src/components/Luke';

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
                <Text>Home Screen</Text>
                <Luke> </Luke>
            </View>
            <View style={homeStyles.div_middle}>
                <Button
                    title="Add Note"
                    onPress={() => navigation.navigate('Details')}
                />
            </View>
            <View style={homeStyles.div_bottom}>
                <ScrollView>
                    <Text>Hello</Text>
                </ScrollView>
            </View>
        </View>
    );
}

function NotesScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            {/*<Button*/}
            {/*    title="Go to Details... again"*/}
            {/*    onPress={() => navigation.navigate('Details')}*/}
            {/*/>*/}
            <NotesView> </NotesView>
        </View>
    );
}

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRoutename = "Home">
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={NotesScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

/**
 * Height variable for screen.
 */
var {height} = Dimensions.get('window');
var {width} = Dimensions.get('window').width;
var eighth_height = height / 8;

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
        alignSelf: 'stretch',
        backgroundColor: '#2196F3',
    },
    div_middle: {
        height: eighth_height,
        width: width,
        alignSelf: 'stretch',
        backgroundColor: '#8BC34A',
    },
    div_bottom: {
        height: eighth_height * 6,
        width: width,
        alignSelf: 'stretch',
        backgroundColor: '#e3aa1a',
    },
});

export default App;
