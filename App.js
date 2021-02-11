/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import * as React from 'react';
import {Button, View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
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
                <TouchableOpacity onPress={() => navigation.navigate('Details')} >
                    <Image
                        source = {{ uri: 'https://raw.githubusercontent.com/hawadlu/Notes/main/images/add_button.png'}}
                        style = {homeStyles.add_button}
                    />
                </TouchableOpacity>
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
var eighth_height = height/8;
var tenth_height = height/10;

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
        backgroundColor: '#e3e3e3'
    },
    add_button: {
        height: tenth_height,
        width: tenth_height,
    }
});

export default App;
