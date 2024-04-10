import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import Drawer from './Drawer';
import Details from '../screens/Details';
import Settings from '../screens/Settings';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
 
    <Stack.Screen name="Drawer" component={Drawer} />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
  
  );
};
export default AppNavigator;

const styles = StyleSheet.create({});
