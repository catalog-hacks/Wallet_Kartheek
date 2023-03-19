/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-alert */
import {ethers} from 'ethers';
import React, {useState} from 'react';
import GenerateSendTxs from './generateTNX';

import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './OpeningPage';
import '@ethersproject/shims';

function useFormData(initialValues: any) {
  const [formValues, setFormValues] = useState(initialValues);

  const handleFormValueChange = (key: any, value: any) => {
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [key]: value,
    }));
  };
  const resetFormValues = () => {
    setFormValues(initialValues);
  };

  return [formValues, handleFormValueChange, resetFormValues];
}

function TransactionPage() {
  const [formValues, handleFormValueChange] = useFormData({
    useraddress: '',
    amount: '',
  });
  const handleSubmit = async () => {
    const privatekey =
      '0xdb2826851e2e7c8d5dedaaceb8fe8362fde0921179152ed4478936d06fa1a616';
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        'https://rpc.ankr.com/eth_goerli',
        5,
      );
      const signer = provider.getSigner(privatekey);
      const balance = await signer.getBalance();
      const amount = ethers.utils.parseEther(formValues.amount);
      if (balance.lt(amount)) {
        throw new Error('Insufficient balance');
      }
      if (!ethers.utils.isAddress(formValues.useraddress)) {
        Alert.alert('Invalid address!');
        return '';
      }
      GenerateSendTxs(amount, formValues.useraddress, privatekey);
    } catch (error) {
      console.error(error);
      Alert.alert('Transaction failed!');
    }
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Make a Payment</Text>
      </View>
      <View>
        <Text>User Address</Text>
        <TextInput
          value={formValues.useraddress}
          onChangeText={text => handleFormValueChange('useraddress', text)}
          style={styles.textfield}
        />
      </View>
      <View>
        <Text>Amount</Text>
        <TextInput
          value={formValues.amount}
          onChangeText={text => handleFormValueChange('amount', text)}
          style={styles.textfield}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit}>
        <View>
          <Text>Submit</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default TransactionPage;

// 0x8ba1f109551bd432803012645ac136ddd64dba72
