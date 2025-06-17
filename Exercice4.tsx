import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      {/* Username */}
      <Text style={styles.label}>Username</Text>
      <TextInput
        placeholder="Masukan username anda"
        style={styles.input}
        autoCapitalize="none"
      />

      {/* Password */}
      <Text style={styles.label}>Password</Text>
      <TextInput
        placeholder="Masukan password anda"
        style={styles.input}
        secureTextEntry
      />

      {/* Tombol Sign In */}
      <TouchableOpacity style={[styles.button, {backgroundColor: '#FF7300'}]}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Tombol Sign in lainnya */}
      <TouchableOpacity style={[styles.button, {backgroundColor: '#DB4437'}]}>
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {backgroundColor: '#3b5998'}]}>
        <Text style={styles.buttonText}>Sign in with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, {backgroundColor: '#000000'}]}>
        <Text style={styles.buttonText}>Sign in with Apple</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'left',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
