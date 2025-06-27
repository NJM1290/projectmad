import React, {useState, useContext} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {NullPhoto} from '../../assets';
import {Button, Gap} from '../../components/atoms';
import {Header, TextInput} from '../../components/molecules';
import {launchCamera} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {AuthContext} from '../../../App'; // ✅ Tambahkan ini

const SignUp = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [based64, setbased64] = useState('');
  const [photo, setPhoto] = useState(NullPhoto);

  const {setUser} = useContext(AuthContext); // ✅ Akses context

  const registerNewUser = () => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      showMessage({
        message: 'Gagal',
        description: 'Semua field wajib diisi!',
        type: 'danger',
      });
      return;
    }

    if (!emailRegex.test(email)) {
      showMessage({
        message: 'Gagal',
        description: 'Format email tidak valid!',
        type: 'danger',
      });
      return;
    }

    if (password.length < 6) {
      showMessage({
        message: 'Gagal',
        description: 'Password minimal 6 karakter!',
        type: 'danger',
      });
      return;
    }

    // ✅ Simpan ke context
    setUser({
      fullName,
      email,
      password,
      photo: based64,
    });

    showMessage({
      message: 'Pendaftaran berhasil!',
      type: 'success',
    });

    navigation.navigate('SignIn');
  };

  const getImage = async () => {
    const result = await launchCamera({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });

    if (result.didCancel) {
      showMessage({
        message: 'Ambil foto dibatalkan',
        type: 'danger',
      });
      setPhoto(NullPhoto);
    } else {
      const data = result.assets[0];
      const photoBased64 = `data:${data.type};base64,${data.base64}`; // ✅ Fixed syntax
      setbased64(photoBased64);
      setPhoto({uri: photoBased64});
    }
  };

  return (
    <ScrollView style={styles.pageContainer}>
      <Header
        text="Sign Up"
        backButton={true}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.profileBorder}>
            <TouchableOpacity activeOpacity={0.5} onPress={getImage}>
              <Image source={photo} style={styles.avatar} />
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={26} />
        <TextInput
          text="Full Name"
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />
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
          text="Continue"
          onPress={registerNewUser}
          color="#4682B4"
          buttonColor="#FFFFFF"
        />
        <Gap height={12} />
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileBorder: {
    height: 110,
    width: 110,
    borderColor: '#8D92A3',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
  },
});
