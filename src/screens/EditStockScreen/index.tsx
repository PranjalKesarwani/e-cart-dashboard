import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootDrawerParamList } from '../../types/types'; 

type EditStockScreenProps = NativeStackScreenProps<RootDrawerParamList, "EditStockScreen">;

const EditStockScreen = ({ navigation }: EditStockScreenProps) => {
 




  return (
   <View>
    <Text>EditStockScreen screen</Text>
   </View>
  );
};

export default EditStockScreen;

const styles = StyleSheet.create({
 
 
 

});
