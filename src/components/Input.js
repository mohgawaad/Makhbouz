import React, { Component } from 'react';
import { View, Text ,TextInput } from 'react-native';

   /** Input Component */
const Input = ({ label , onPress ,value , onChangeText ,placeholder ,secureTextEntry ,placeholderTextColor , style }) => {
const { inputStyle, } = styles;

    return (
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        autoCorrect={false}
        style={[inputStyle, style]}
        value={value}
        onPress={onPress}
        onChangeText={onChangeText}
      />
   

    );

};

const styles = {

    inputStyle: {
        color: '#000',
        padding:15,
        fontSize: 18,
        lineHeight: 23,
        width: '90%',
        height: 50,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 15,
        marginTop: 10

    },
}

export { Input };