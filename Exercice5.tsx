import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo-with-motto-3.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    padding: 30,
    paddingRight: 90,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'blue',
    padding: 30,
  },
  blackBox: {
    backgroundColor: 'black',
    width: 80,
    height: 80,
  },
  yellowBox: {
    backgroundColor: 'yellow',
    width: 80,
    height: 80,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
});
