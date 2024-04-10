import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

type AuthScreenProps = NativeStackScreenProps<RootStackParamList, "AuthScreen">

const AuthScreen = ({ navigation }: AuthScreenProps) => {


  // setTimeout(()=>{
  //   // if(!isAuth)return navigation.replace("LoginScreen");
  //   navigation.navigate("DrawerNavigator")

  // },3000)


  return (
    <View style={styles.container}>
      <Text>Authentication screen, this will contain signup and login screen</Text>

   
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent:"center"

  }
})
