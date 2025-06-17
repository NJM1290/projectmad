import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../assets/logo.svg';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo width={120} height={120} />
      <Text>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02CF8E',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
