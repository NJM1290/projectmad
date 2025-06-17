import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CustomTitle from './components/CustomTitle';
import CustomInput from './components/CustomInput';
import CustomButton from './components/CustomButton';

const Exercice6 = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone:', phone);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomTitle title="Registration" />
      <CustomInput
        label="Name"
        placeholder="Masukan nama lengkap anda"
        value={name}
        onChangeText={setName}
      />
      <CustomInput
        label="Username"
        placeholder="Masukan username anda"
        value={username}
        onChangeText={setUsername}
      />
      <CustomInput
        label="Email"
        placeholder="Masukan email anda"
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        label="Address"
        placeholder="Masukan alamat anda"
        value={address}
        onChangeText={setAddress}
      />
      <CustomInput
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
      />
      <CustomButton title="Register" onPress={handleRegister} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
});

export default Exercice6;
