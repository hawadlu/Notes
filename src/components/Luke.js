import React from 'react';
import {Image, View, Text} from 'react-native';

const Luke = () => {
    return (
        <View>
        <Image
            source = {{ uri: 'https://raw.githubusercontent.com/hawadlu/Notes/main/images/luke.png'}}
            style = {{width: 64, height: 64}}

        />
    <Text> Luke image is displayed </Text>
        </View>
    );
}

export default Luke;
