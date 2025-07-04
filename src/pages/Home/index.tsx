import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button, Gap} from '../../components/atoms';
import {DummyPhoto} from '../../assets';
import {getDatabase, ref, child, get} from 'firebase/database';
import {Loading} from '../../components/molecules';

const Home = ({navigation, route}) => {
  const [balance, setBalance] = useState(10000000);
  const [income, setIncome] = useState(6000000);
  const [expenditure, setExpenditure] = useState(4000000);
  const [photo, setPhoto] = useState(DummyPhoto);
  const [fullName, setFullName] = useState('John Doe');
  const [loading, setLoading] = useState(false);

  const {uid} = route.params;

  useEffect(() => {
    // ambil data user dari Firebase
    setLoading(true);
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${uid}`))
      .then(snapshot => {
        setLoading(false);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setPhoto({uri: data.photo});
          setFullName(data.fullName);
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (route.params?.type === 'deposit') {
      const nominal = route.params.nominal;
      setBalance(prev => prev + nominal);
      setIncome(prev => prev + nominal);
    } else if (route.params?.type === 'withdrawal') {
      const nominal = route.params.nominal;
      setBalance(prev => prev - nominal);
      setExpenditure(prev => prev + nominal);
    }
  }, [route.params]);

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.appTitle}>{`Hi, ${fullName}`}</Text>
          <Text style={styles.appSubTitle}>
            This is your personal finance app
          </Text>
        </View>
        <Image source={photo} style={styles.photo} />
      </View>

      <View style={styles.contentWrapper}>
        <Text style={styles.subTitle}>Your Balance</Text>
        <Text style={styles.totalBalance}>
          Rp. {balance.toLocaleString('id-ID')}
        </Text>

        <View style={styles.line} />

        <View style={styles.subTotalWrapper}>
          <Text style={styles.subTotal}>Income</Text>
          <Text style={styles.subTotal}>
            Rp. {income.toLocaleString('id-ID')}
          </Text>
        </View>

        <View style={styles.subTotalWrapper}>
          <Text style={styles.subTotal}>Expenditure</Text>
          <Text style={styles.subTotal}>
            Rp. {expenditure.toLocaleString('id-ID')}
          </Text>
        </View>

        <Text style={styles.subTitle}>Add Transaction</Text>

        <Button
          text="Cash Deposit"
          onPress={() => navigation.navigate('CashDeposit')}
          color="#4682B4"
          buttonColor="#FFFFFF"
        />
        <Gap height={10} />
        <Button
          text="Cash Withdrawal"
          onPress={() => navigation.navigate('CashWithdrawal')}
          color="#4682B4"
          buttonColor="#FFFFFF"
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    flex: 1,
  },
  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: '#000000',
    fontSize: 16,
    marginVertical: 12,
  },
  totalBalance: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000000',
    fontSize: 24,
    textAlign: 'center',
  },
  line: {
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    marginVertical: 18,
  },
  subTotalWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subTotal: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#000000',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 37,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: '#020202',
  },
  appSubTitle: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: '#8D92A3',
  },
  photo: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
});
