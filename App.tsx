import 'react-native-gesture-handler';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <SafeAreaProvider>

      <NavigationContainer>

        <AppNavigator/>

      </NavigationContainer>

    </SafeAreaProvider>
  );
};

export default App;
