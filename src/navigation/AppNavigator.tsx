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
import SellerRegistrationScreen from '../screens/SellerRegistrationScreen';
import OtpScreen from '../screens/OtpScreen';
import NoticeBoardScreen from '../screens/NoticeBoardScreen';
import AnalyticData from '../screens/AnalyticsScreen/AnalyticData';
import ChatDetails from '../screens/ChatsScreen/ChatDetails';
import DailyOrderDetails from '../screens/DailyOrdersScreen/DailyOrderDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }} initialRouteName='SplashScreen'>
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='AnalyticData' component={AnalyticData} />
      <Stack.Screen name='ChatDetails' component={ChatDetails} />
      <Stack.Screen name='DailyOrderDetails' component={DailyOrderDetails} />

      <Stack.Screen name='SellerRegistrationScreen' component={SellerRegistrationScreen} />
      <Stack.Screen name='OtpScreen' component={OtpScreen} />
      <Stack.Screen name='AuthScreen' component={AuthScreen} />
      <Stack.Screen name='NoticeBoardScreen' component={NoticeBoardScreen} />
 
    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
  
  );
};
export default AppNavigator;

const styles = StyleSheet.create({});
