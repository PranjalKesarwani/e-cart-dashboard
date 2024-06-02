
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../types/types'; 

type SellerRegistrationScreenProps = NativeStackScreenProps<RootStackParamList, "SellerRegistrationScreen">;

const SellerRegistrationScreen = ({ navigation }: SellerRegistrationScreenProps) => {
 




  return (
   <View>
    <Text>Analytics screen</Text>
   </View>
  );
};

export default SellerRegistrationScreen;

const styles = StyleSheet.create({
 
 
 

});
