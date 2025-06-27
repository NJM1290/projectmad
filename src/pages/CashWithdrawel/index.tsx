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

const CashWithdrawal = ({navigation}) => {
  const [bank, setBank] = useState('');
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(10000000);
  const [transactions, setTransactions] = useState([
    {tanggal: '17 April 2020', deskripsi: 'Income', nominal: 300000},
    {tanggal: '18 April 2020', deskripsi: 'Expense', nominal: -300000},
    {tanggal: '19 April 2020', deskripsi: 'Top Up', nominal: 300000},
  ]);

  const handleWithdraw = () => {
    if (!bank.trim() || !amount.trim()) {
      Alert.alert('Failed', 'Please enter bank name and amount.');
      return;
    }

    const nominal = parseInt(amount.replace(/[^0-9]/g, ''), 10);
    if (isNaN(nominal) || nominal <= 0) {
      Alert.alert('Failed', 'Invalid withdrawal amount.');
      return;
    }

    if (nominal > balance) {
      Alert.alert('Failed', 'Insufficient balance.');
      return;
    }

    const today = new Date();
    const tanggal = today.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const newTransaction = {
      tanggal,
      deskripsi: 'Cash Withdrawal',
      nominal: -nominal,
    };

    setTransactions(prev => [newTransaction, ...prev]);
    setBalance(prev => prev - nominal);
    setBank('');
    setAmount('');

    // Navigasi kembali ke Home dengan data penarikan
    navigation.navigate('Home', {
      type: 'withdrawal',
      nominal: nominal,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={arrowBack} style={styles.arrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Cash Withdrawal</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Funds</Text>
        <Text style={styles.bold}>NM</Text>
        <Text>200213443U3I</Text>
        <Text style={styles.bold}>Rp{balance.toLocaleString('id-ID')}</Text>
      </View>

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

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="Rp"
          keyboardType="numeric"
          placeholderTextColor="#888"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleWithdraw}>
        <Text style={styles.buttonText}>Cash Withdrawal</Text>
      </TouchableOpacity>

      <View style={styles.historyContainer}>
        <Text style={styles.label}>Last Transactions</Text>
        {transactions.slice(0, 3).map((item, index) => (
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

export default CashWithdrawal;

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
