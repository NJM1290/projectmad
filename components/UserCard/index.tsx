import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const UserCard = ({user}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: user.avatar}} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>
          <Text style={styles.bold}>{user.last_name}</Text> {user.first_name}
        </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderWidth: 0.4,
    borderRadius: 20,
    marginBottom: 25,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 16,
  },
  bold: {
    fontWeight: 'bold',
  },
  email: {
    color: 'black',
  },
});
