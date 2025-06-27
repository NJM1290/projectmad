import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import arrowBack from '../../assets/arrow_back.png';

const CashDeposit = ({navigation}) => {
  const [rekening, setRekening] = useState('');
  const [bank, setBank] = useState('');
  const [jumlah, setJumlah] = useState('');
  const [saldo, setSaldo] = useState(10000000); // Saldo awal Rp10.000.000
  const [transaksi, setTransaksi] = useState([
    {tanggal: '17 April 2020', deskripsi: 'Pemasukan', nominal: 300000},
    {tanggal: '18 April 2020', deskripsi: 'Pengeluaran', nominal: -300000},
    {tanggal: '19 April 2020', deskripsi: 'Top Up', nominal: 300000},
  ]);

  const handleDeposit = () => {
    if (!rekening || !bank || !jumlah) {
      Alert.alert('Failed', 'All fields must be filled!');
      return;
    }

    const nominalAngka = parseInt(jumlah.replace(/[^0-9]/g, ''), 10);
    if (isNaN(nominalAngka) || nominalAngka <= 0) {
      Alert.alert('Failed', 'Invalid amount!');
      return;
    }

    const today = new Date();
    const tanggal = today.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const transaksiBaru = {
      tanggal,
      deskripsi: 'Cash Deposit',
      nominal: nominalAngka,
    };

    setTransaksi(prev => [transaksiBaru, ...prev]);
    setSaldo(prev => prev + nominalAngka); // Tambah saldo
    setRekening('');
    setBank('');
    setJumlah('');
    Alert.alert('Success', 'Cash deposit successful');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={arrowBack} style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>CashDeposit</Text>
      </View>

      {/* Saldo */}
      <View style={styles.card}>
        <Text style={styles.label}>Funds</Text>
        <Text style={styles.bold}>NM</Text>
        <Text>200213443U3I</Text>
        <Text style={styles.bold}>Rp{saldo.toLocaleString('id-ID')}</Text>
      </View>

      {/* Input Rekening */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Destination Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter The Destination Account"
          placeholderTextColor="#888"
          value={rekening}
          onChangeText={setRekening}
        />
      </View>

      {/* Input Bank */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Bank Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter The Bank Name"
          placeholderTextColor="#888"
          value={bank}
          onChangeText={setBank}
        />
      </View>

      {/* Input Jumlah */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Rp"
          keyboardType="numeric"
          placeholderTextColor="#888"
          value={jumlah}
          onChangeText={setJumlah}
        />
      </View>

      {/* Tombol Deposit */}
      <TouchableOpacity style={styles.button} onPress={handleDeposit}>
        <Text style={styles.buttonText}>CashDeposit</Text>
      </TouchableOpacity>

      {/* Riwayat Transaksi */}
      <View style={styles.historyContainer}>
        <Text style={styles.label}>Last Transactions</Text>
        {transaksi.slice(0, 3).map((item, index) => (
          <View key={index} style={styles.historyItem}>
            <View>
              <Text style={styles.historyDate}>{item.tanggal}</Text>
              <Text>{item.deskripsi}</Text>
            </View>
            <Text style={item.nominal < 0 ? styles.red : styles.green}>
              {item.nominal < 0 ? '-' : '+'}Rp
              {Math.abs(item.nominal).toLocaleString('id-ID')}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default CashDeposit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  inputGroup: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  historyContainer: {
    marginTop: 10,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  historyDate: {
    fontSize: 12,
    color: '#888',
  },
  green: {
    color: 'green',
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
  },
});
