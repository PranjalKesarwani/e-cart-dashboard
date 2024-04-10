import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RootDrawerParamList } from '../../types/types';

type DashScreenProps = NativeStackScreenProps<RootDrawerParamList, "DashScreen">



const DashScreen = ({navigation}:DashScreenProps) => {
  
  return (
    <View style={styles.container} >
      <View style={styles.textContainer} >

      <Text style={styles.textStyle}>Dash Screen</Text>
      <Text style={styles.textStyle}>This screen will contain dashboard</Text>
      
      {/* <Button
      title='Go to ShopList Screen'
      onPress={()=>navigation.navigate("ShopListScreen")}
      /> */}
      </View>
   
    </View>
  );
};

export default DashScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  
  },
  textContainer:{
    width:250,
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center"
  },
  textStyle:{
    fontSize:20,
    textAlign:"center"
  }
})
