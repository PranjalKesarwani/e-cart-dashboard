import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootDrawerParamList } from '../../types/types'; 

type DailyOrdersScreenProps = NativeStackScreenProps<RootDrawerParamList, "DailyOrdersScreen">;

const DailyOrdersScreen = ({ navigation }: DailyOrdersScreenProps) => {
 




  return (
   <View>
    <Text>DailyOrdersScreen</Text>
   </View>
  );
};

export default DailyOrdersScreen;

const styles = StyleSheet.create({
 
 
 

});
