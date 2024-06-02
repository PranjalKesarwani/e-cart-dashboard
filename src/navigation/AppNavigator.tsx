import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import Details from '../screens/Details';
import Settings from '../screens/Settings';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
import AuthScreen from '../screens/AuthScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }} initialRouteName='SplashScreen'>
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='AuthScreen' component={AuthScreen} />
 
    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
  
  );
};
export default AppNavigator;

const styles = StyleSheet.create({});
