import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootDrawerParamList } from '../../types/types'; 

type ChatsScreenProps = NativeStackScreenProps<RootDrawerParamList, "ChatsScreen">;

const ChatsScreen = ({ navigation }: ChatsScreenProps) => {
 




  return (
   <View>
    <Text>ChatsScreen</Text>
   </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
 
 
 

});
