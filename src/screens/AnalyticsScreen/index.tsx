import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootDrawerParamList } from '../../types/types'; 

type AnalyticsScreenProps = NativeStackScreenProps<RootDrawerParamList, "AnalyticsScreen">;

const AnalyticsScreen = ({ navigation }: AnalyticsScreenProps) => {
 




  return (
   <View>
    <Text>Analytics screen</Text>
   </View>
  );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
 
 
 

});
