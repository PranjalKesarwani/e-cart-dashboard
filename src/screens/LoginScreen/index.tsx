import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {  RootStackParamList } from '../../types/types'; 

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "LoginScreen">;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
 




  return (
   <View>
    <Text>LoginScreen </Text>
   </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
 
 
 

});
