import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../../assets/food.svg'; // Logo SVG kamu
import backgroundImage from '../../assets/background.png'; // Ganti dengan path gambar background kamu

const SplashScreen = () => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.titleJM}>JM</Text>
        <Text style={styles.titleFood}>food</Text>
        <Logo style={styles.logo} />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleJM: {
    fontSize: 48,
    fontFamily: 'Satisfy-Regular', // Sesuaikan dengan font yang kamu install
    color: '#000',
  },
  titleFood: {
    fontSize: 24,
    fontFamily: 'Satisfy-Regular',
    color: '#000',
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
  },
});
