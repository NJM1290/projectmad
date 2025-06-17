import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({text, color = 'orange', textColor = 'black'}) => {
  return (
    <TouchableOpacity style={styles.button(color)}>
      <Text style={styles.buttonText(textColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  }),
  buttonText: textColor => ({
    color: textColor,
    fontSize: 12,
  }),
});
