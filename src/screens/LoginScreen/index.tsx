import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RootStackParamList } from '../../types/types';
import Title from '../../components/Title';
import SellerRegistrationScreen from '../SellerRegistrationScreen';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [role, setRole] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOtp = ()=>{
    console.log("handle send otp")
    navigation.navigate('OtpScreen', { phoneNumber });

  }

  return (
    <View style={styles.container}>
      <Title fontSize={36} fontWeight={"bold"} />
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={role}
          onValueChange={(itemValue) => setRole(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Select your role" value="" />
          <Picker.Item label="Seller" value="seller" />
          <Picker.Item label="Delivery Boy" value="delivery_boy" />
        </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      <TouchableOpacity style={styles.button} onPress={() => { handleSendOtp() }}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.sellerRegistrationButton} onPress={() => { navigation.navigate("SellerRegistrationScreen") }}>
        <Text style={styles.sellerRegistrationButtonText}>Seller Registration</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
    padding: 16,
  },
  dropdownContainer: {
    width: '80%',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#000',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ff8c00',
    borderRadius: 10,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: '#ff8c00',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sellerRegistrationButton: {
    position: 'absolute',
    bottom: 30,
    width: '80%',
    height: 50,
    backgroundColor: '#ff8c00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sellerRegistrationButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
