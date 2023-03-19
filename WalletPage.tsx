import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TextInput,
  Image,
} from 'react-native';
function WalletView() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text>Catlog</Text>
        </View>
        <View>
          <Text>Secure your wallet </Text>
        </View>
        <View>
          {/* <Image source={require('@expo/snack-static/react-native-logo.png')} /> */}
          <Text>
            Don’t risk losing your funds. Protect your wallet by saving your
            Secret Recovery Phrase in a place you trust. It’s the only way to
            recovery your wallet if you get locked out of the app or get a new
            device.
          </Text>
        </View>
        <View>
          <Button title={'Start'} />
        </View>
        <Text>Highly Recomended</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
});

export default WalletView;
