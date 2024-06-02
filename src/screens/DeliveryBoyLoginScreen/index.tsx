
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  RootStackParamList } from '../../types/types'; 

type DeliveryBoyLoginScreenProps = NativeStackScreenProps<RootStackParamList, "DeliveryBoyLoginScreen">;

const DeliveryBoyLoginScreen = ({ navigation }: DeliveryBoyLoginScreenProps) => {
 




  return (
   <View>
    <Text>DeliveryBoyLoginScreen </Text>
   </View>
  );
};

export default DeliveryBoyLoginScreen;

const styles = StyleSheet.create({
 
 
 

});
