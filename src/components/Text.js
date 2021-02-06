import React from 'react';
import {TextInput} from 'react-native';

const UselessTextInput = () => {
    return (
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="I am a UselessTextInput"
            />
    );
}

export default UselessTextInput;
