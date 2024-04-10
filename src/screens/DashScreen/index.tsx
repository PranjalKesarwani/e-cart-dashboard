import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RootDrawerParamList } from '../../types/types';

type DashScreenProps = NativeStackScreenProps<RootDrawerParamList, "DashScreen">



const DashScreen = ({navigation}:DashScreenProps) => {
  
  return (
    <View style={styles.container} >
      <View style={styles.textContainer} >

      <Text style={styles.textStyle}>List of shop Categories + Importat Contacts</Text>
      <Text style={styles.textStyle}>e.g. Shoes, Watch, Cloth, Mats + Contacts of Potters, Kabadi waale, R.O. , AC, Electrician</Text>
      
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
