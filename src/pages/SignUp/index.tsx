import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';

import BackgroundImage from '../../assets/background.png';
import GoogleIcon from '../../assets/google.png'; // logo google bulat

const SignUp = () => {
  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <View style={styles.overlay}>
        {/* LogoImage sudah dihapus */}

        <View style={styles.container}>
          <Header text="< Sign Up" />
          <Gap height={20} />
          <TextInput text="Username" placeholder="Enter your username" />
          <Gap height={16} />
          <TextInput
            text="Password"
            placeholder="Enter your password"
            secureTextEntry
          />
          <Gap height={24} />
          <Button text="SignUp" />
          <Gap height={12} />

          <View style={styles.linkContainer}>
            <TouchableOpacity>
              <Text style={styles.linkText}>Forget Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.separator}>
            <View style={styles.line} />
            <Text style={styles.continueText}>Or SignUp With</Text>
            <View style={styles.line} />
          </View>

          <ImageBackground source={GoogleIcon} style={styles.googleIcon} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },
  container: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText: {
    fontSize: 12,
    color: '#8D92A3',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  continueText: {
    marginHorizontal: 10,
    fontSize: 12,
    color: '#8D92A3',
  },
  googleIcon: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
});
