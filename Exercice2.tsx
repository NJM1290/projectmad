import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Exercice2 = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CV PRIBADI</Text>
      </View>

      {/* Gambar dari assets */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('./assets/IMG_20240411_170644_223.jpg')}
        />
      </View>

      <View>
        <Text style={styles.label}>Nama Lengkap</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan nama lengkap anda"
        />

        <Text style={styles.label}>Tempat, Tanggal Lahir</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: Manado, 10 Januari 2003"
        />

        <Text style={styles.label}>Alamat</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukkan alamat lengkap anda"
        />

        <Text style={styles.label}>Nomor Telepon</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: 08xxxxxxxxxx"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: nama@email.com"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Pendidikan Terakhir</Text>
        <TextInput
          style={styles.input}
          placeholder="Contoh: S1 Informatika - Universitas Negeri Manado"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Simpan Data</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Exercice2;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FF6600',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: '#FF6600',
    borderWidth: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 20,
    marginTop: 15,
    color: '#333',
  },
  input: {
    borderWidth: 2,
    borderColor: '#000',
    fontSize: 18,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 20,
    borderRadius: 20,
    margin: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
