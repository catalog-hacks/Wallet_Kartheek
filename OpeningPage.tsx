import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
function OpeningPage() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.textDiv}>
          <Text style={styles.textStyle}>Catalog</Text>
        </View>
        <View>
          <Text>Create Password</Text>
        </View>
        <View>
          <Text>
            This Password will unlock your Metamask wallet only on this device.
          </Text>
        </View>
        <Text>New PassWord</Text>
        <View>
          <TextInput secureTextEntry={false} style={styles.textfield} />
        </View>
        <Text>Confirm PassWord</Text>
        <View>
          <TextInput secureTextEntry={true} style={styles.textfield} />
        </View>
        <View style={styles.buttonStyle}>
          <Button
            title={'Create a new wallet'}
            onPress={() => alert('Hello')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default OpeningPage;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
  },
  buttonStyle: {borderRadius: 25},
  textStyle: {color: 'black', fontSize: 24, fontWeight: 'bold'},
  textDiv: {
    width: '100%',
    height: '60%',
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textfield: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 350,
  },
});
