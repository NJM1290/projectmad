import React, {useState, useContext} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {AuthContext} from '../../../App'; // ✅ Import context

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {user} = useContext(AuthContext); // ✅ Ambil user dari context

  const handleSignIn = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Gagal', 'Masukkan email dan password Anda!');
      return;
    }

    if (!user) {
      Alert.alert('Gagal', 'Belum ada akun terdaftar!');
      return;
    }

    if (email === user.email && password === user.password) {
      Alert.alert('Berhasil', 'Anda berhasil masuk!');
      navigation.replace('Home'); // ✅ replace agar tidak bisa kembali
    } else {
      Alert.alert('Gagal', 'Email atau password salah!');
    }
  };

  return (
    <View style={styles.pageContainer}>
      <Header text="Sign In" />
      <View style={styles.contentContainer}>
        <Gap height={26} />
        <TextInput
          text="Email Address"
          placeholder="Enter your email address"
          value={email}
          onChangeText={setEmail}
        />
        <Gap height={16} />
        <TextInput
          text="Password"
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Gap height={24} />
        <Button
          text="Sign In"
          onPress={handleSignIn}
          color="#4682B4"
          buttonColor="#FFFFFF" // putih
        />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          buttonColor="#FFFFFF"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
  },
});
