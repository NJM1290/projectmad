import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Header, Loading, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = getAuth();
  const onSignIn = () => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        setLoading(false);
        const user = userCredential.user;
        navigation.navigate('Home', {
          uid: user.uid,
        });
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };
  return (
    <>
      <View style={styles.pageContainer}>
        <Header text="Sign In" />
        <View style={styles.contentContainer}>
          <Gap height={26} />
          <TextInput
            text="Email Address"
            placeholder="Enter your email address"
            onChangeText={e => setEmail(e)}
          />
          <Gap height={16} />
          <TextInput
            text="Password"
            placeholder="Enter your password"
            secureTextEntry={true}
            onChangeText={e => setPassword(e)}
          />
          <Gap height={24} />
          <Button text="Sign In" onPress={onSignIn} />
          <Gap height={12} />
          <Button
            text="Create New Account"
            color="#8D92A3"
            buttonColor="#FFFFFF"
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
  },
});
