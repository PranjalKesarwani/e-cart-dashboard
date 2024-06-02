import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootDrawerParamList } from '../../types/types'; 

type DeliveryScreenProps = NativeStackScreenProps<RootDrawerParamList, "DeliveryScreen">;

const DeliveryScreen = ({ navigation }: DeliveryScreenProps) => {
 




  return (
   <View>
    <Text> DeliveryScreen</Text>
   </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
 
 
 

});
