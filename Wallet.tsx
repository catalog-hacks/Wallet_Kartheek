/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {ethers} from 'ethers';
import {JsonRpcProvider} from '@ethersproject/providers';
import '@ethersproject/shims';

function WalletBlock() {
  // const sampleMnemonic =
  //   'manage object assault idea unusual luggage dog title little paper nurse violin';
  // const wallet = ethers.Wallet.fromMnemonic(sampleMnemonic);
  function restoreHDNode(mnemonic: string) {
    return ethers.utils.HDNode.fromMnemonic(mnemonic);
  }
  let mnemonic =
    'manage object assault idea unusual luggage dog title little paper nurse violin';

  console.log(restoreHDNode(mnemonic));
  const HdnodeAddress = restoreHDNode(mnemonic);
  const publicKey =
    '0x0494d3064f4ec213e178a36960b53b0cf21d5e2db32da1d476d1ef3b1a2bdec679e37b61d4a60b4e0f1ff61d5f089a5523a561a883b76390fdca6009d90bd8ea28';
  const privatekey =
    '0xdb2826851e2e7c8d5dedaaceb8fe8362fde0921179152ed4478936d06fa1a616';
  const publicAddress = '0x99c1A5273adA79092979952a48Ea8D5e5c7E5D14';

  const [balance, setBalance] = useState('');

  async function fetchBalance() {
    try {
      const provider = new JsonRpcProvider(
        'https://rpc.ankr.com/eth_goerli',
        5,
      );
      const balancefromwallet = await provider.getBalance(publicAddress);
      setBalance(ethers.utils.formatEther(balancefromwallet).toString());
      Alert.alert('Balance fetched successfully');
    } catch (error) {
      console.log(error);
      Alert.alert('Error fetching balance');
    }
  }

  useEffect(() => {
    fetchBalance();
  }, [publicKey, privatekey, publicAddress]);

  return (
    <>
      <View>
        <Text>Public Key: {publicKey}</Text>
        <Text>Private Key: {privatekey}</Text>
        <Text>Public Address: {publicAddress}</Text>
        <Button title="Fetch Balance" onPress={fetchBalance} />
        <Text>Balance: {balance} ETH</Text>
        <Text>HdnodeAddress : {HdnodeAddress.address}</Text>
        <Text>Hdnodeprivatekey : {HdnodeAddress.privateKey}</Text>
        <Text>Hdnodepublickey : {HdnodeAddress.publicKey}</Text>
      </View>
    </>
  );
}

export default WalletBlock;
