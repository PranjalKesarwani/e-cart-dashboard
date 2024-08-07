import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { RootStackParamList } from '../../types/types';
import Title from '../../components/Title';
import { validateForm } from './helpers';
import useApi from '../../hooks/useApi';
import axios from 'axios';
import { apiUrl } from '../../helpers/url';

type SellerRegistrationScreenProps = NativeStackScreenProps<RootStackParamList, "SellerRegistrationScreen">;

export interface SellerForm {
  sellerName: string;
  shopName: string;
  address: string;
  landmark: string;
  phoneNumber: string;
  pincode: string;
}

const SellerRegistrationScreen = ({ navigation }: SellerRegistrationScreenProps) => {
  const { data, error, isLoading, sendRequest } = useApi<any>();
  const emptyForm = {
    sellerName: "",
    shopName: "",
    address: "",
    landmark: "",
    phoneNumber: "",
    pincode: ""
  }

  const [sellerForm, setSellerForm] = useState<SellerForm>(emptyForm);

  const handleRegistration = async () => {
    if(!validateForm(sellerForm)){
      return;
    }

    try {
      console.log("working 1");
      await sendRequest('POST', `${apiUrl}/auth/seller-signup`, sellerForm);

      console.log("--xx--xx", data);
      navigation.navigate("NoticeBoardScreen")

    } catch (error:any) {
      console.log(error.message);
    }

    // if (validateForm(sellerForm)) {

    // sendRequest({
    //   method: 'POST',
    //   url: `${apiUrl}/auth/seller-signup`,
    //   data: sellerForm,
    // });
    // console.log("testing 1")
    //       const res = await axios.post(`${apiUrl}/auth/seller-signup`,sellerForm);
    //       console.log("testing 2")
    //       console.log(res.data);
    // if(res?.status === 201){
    //   let data = res.data;


    //   console.log("Data created!", data)
    // }
    // if(res?.status === 200){
    //   let data = res.data;

    //   console.log("Data already created!", data)
    // }



    // } else {
    // return;
    // }

  }

  // const testBtn = async ()=>{
  //   console.log("testBtn")
  //   try {
  //     const res = await axios.get(`${apiUrl}/testing`);
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log("error occured by testing api", error)
  //   }


  // }


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title fontSize={36} fontWeight={"bold"} />
      <Text style={styles.title}>Seller Registration</Text>

      <TextInput
        style={styles.input}
        placeholder="Seller Name"
        value={sellerForm.sellerName}
        onChangeText={(text) => setSellerForm({ ...sellerForm, sellerName: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Shop Name"
        value={sellerForm.shopName}
        onChangeText={(text) => setSellerForm({ ...sellerForm, shopName: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Address"
        value={sellerForm.address}
        onChangeText={(text) => setSellerForm({ ...sellerForm, address: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Landmark"
        value={sellerForm.landmark}
        onChangeText={(text) => setSellerForm({ ...sellerForm, landmark: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={sellerForm.phoneNumber}
        onChangeText={(text) => setSellerForm({ ...sellerForm, phoneNumber: text })}
      />

      <TextInput
        style={styles.input}
        placeholder="Pincode"
        keyboardType="number-pad"
        value={sellerForm.pincode}
        onChangeText={(text) => setSellerForm({ ...sellerForm, pincode: text })}
      />


      <TouchableOpacity style={styles.button} onPress={() => { handleRegistration() }}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SellerRegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
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
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
