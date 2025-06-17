import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import UserCard from './components/UserCard';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?per_page=12')
      .then(response => response.json())
      .then(data => setUsers(data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </ScrollView>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
});
