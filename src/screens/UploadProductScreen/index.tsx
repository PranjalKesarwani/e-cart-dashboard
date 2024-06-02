import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootDrawerParamList } from '../../types/types'; 

type UploadProductScreenProps = NativeStackScreenProps<RootDrawerParamList, "UploadProductScreen">;

const UploadProductScreen = ({ navigation }: UploadProductScreenProps) => {
 




  return (
   <View>
    <Text>UploadProductScreen</Text>
   </View>
  );
};

export default UploadProductScreen;

const styles = StyleSheet.create({
 
 
 

});
