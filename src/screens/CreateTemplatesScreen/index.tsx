import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootDrawerParamList } from '../../types/types'; 

type CreateTemplatesScreenProps = NativeStackScreenProps<RootDrawerParamList, "CreateTemplatesScreen">;

const CreateTemplatesScreen = ({ navigation }: CreateTemplatesScreenProps) => {
 




  return (
   <View>
    <Text>CreateTemplatesScreen</Text>
   </View>
  );
};

export default CreateTemplatesScreen;

const styles = StyleSheet.create({
 
 
 

});
