import React, {createContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

import SplashScreen from './src/pages/SplashScreen';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';
import Home from './src/pages/Home';
import Cashwithdrawal from './src/pages/CashWithdrawel';
import CashDeposit from './src/pages/CashDeposit';

// ✅ Buat AuthContext
export const AuthContext = createContext();

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState(null); // Menyimpan user dari SignUp
  const [balance, setBalance] = useState(10000000); // ✅ Saldo awal Rp10.000.000

  return (
    <AuthContext.Provider value={{user, setUser, balance, setBalance}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CashWithdrawal"
            component={Cashwithdrawal}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="CashDeposit"
            component={CashDeposit}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
