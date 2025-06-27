import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../../assets/Logo.svg';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Logo width={150} height={150} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E1E2D',
    marginTop: 20,
  },
});
