import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

   /** Button Component */
const Button = ({ onPress, children, style }) => {

  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '90%',
    margin: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccae62',
    borderRadius: 10,

  }
});

export { Button };
