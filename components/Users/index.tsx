import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Users = ({name, email, phone}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{email}</Text>
      <Text style={styles.text}>{phone}</Text>
    </View>
  );
};

export default Users;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: '#000000',
  },
});
