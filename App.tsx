/* eslint-disable prettier/prettier */
import React from 'react';
// import OpeningPage from './OpeningPage';
import WalletView from './WalletPage';
import WalletBlock from './Wallet';
import {View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import TransactionPage from './Transactions';

function App(): JSX.Element {
  return (
    <View>
      {/* <OpeningPage /> */}
      {/* <WalletView /> */}
      <WalletBlock />
      <TransactionPage />
    </View>
  );
}

export default App;
