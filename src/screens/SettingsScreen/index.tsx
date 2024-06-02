import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootDrawerParamList } from '../../types/types'; 

type SettingsScreenProps = NativeStackScreenProps<RootDrawerParamList, "SettingsScreen">;

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
 




  return (
   <View>
    <Text>SettingsScreen</Text>
   </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
 
 
 

});
