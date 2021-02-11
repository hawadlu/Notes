import React from 'react';
import {View, Button, TextInput, Alert, StyleSheet, Dimensions} from 'react-native';

/**
 * Currently doesnt do anything, need files.
 * @returns {void|*}
 * @constructor
 */
const RunSearch = () =>
    Alert.alert(
        "TODO: make a search function lol",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );

const Search_bar = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text_input}
                defaultValue="Search Notes..."
            />
            <Button
                style={styles.button}
                title="Enter"
                onPress={() => RunSearch()}
            />
        </View>
    );
}

/**
 * Height variable for screen.
 */
var {height} = Dimensions.get('window');
var {width} = Dimensions.get('window').width;
var tenth_height = height/10;

/**
 * Styles for the Search bar.
 */
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    button: {
        height: tenth_height
    },
    text_input: {
        height: tenth_height,
        borderColor: 'gray',
        borderWidth: 1
    }
});

export default Search_bar;