import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootDrawerParamList } from '../../types/types'; 

type KhataScreenProps = NativeStackScreenProps<RootDrawerParamList, "KhataScreen">;

const KhataScreen = ({ navigation }: KhataScreenProps) => {
 




  return (
   <View>
    <Text>KhataScreen screen</Text>
   </View>
  );
};

export default KhataScreen;

const styles = StyleSheet.create({
 
 
 

});
