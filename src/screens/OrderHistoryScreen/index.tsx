import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootDrawerParamList } from '../../types/types'; 

type OrderHistoryScreenProps = NativeStackScreenProps<RootDrawerParamList, "OrderHistoryScreen">;

const OrderHistoryScreen = ({ navigation }: OrderHistoryScreenProps) => {
 




  return (
   <View>
    <Text>OrderHistory screen</Text>
   </View>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
 
 
 

});
