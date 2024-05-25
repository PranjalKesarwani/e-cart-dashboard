import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';

type SplashProps = NativeStackScreenProps<RootStackParamList, "SplashScreen">

const SplashScreen = ({ navigation }: SplashProps) => {

  const [isAuth, setIsAuth] = useState<boolean>(true);

  setTimeout(()=>{
    if(!isAuth)return navigation.replace("AuthScreen");
    navigation.navigate("DrawerNavigator")

  },3000)


  return (
    <View style={styles.container}>
      <Text>Welcome to Amazex</Text>
      <Text>Authenticating User...</Text>

    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent:"center"

  }
})
