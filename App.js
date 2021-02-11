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

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
    </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
    <DetailsStack.Navigator initialRouteName="Home">
        <Stack.Screen name="Details" component={NotesScreen}/>
    </DetailsStack.Navigator>
);

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeStackScreen}/>
                <Drawer.Screen name="Details" component={DetailsStackScreen}/>
            </Drawer.Navigator>
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


/*import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header/>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Run away screaming because this is too complicated!
              </Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;*/
