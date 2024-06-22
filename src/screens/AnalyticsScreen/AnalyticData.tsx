import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {  RootStackParamList } from '../../types/types';
import Icons from 'react-native-vector-icons/AntDesign';


type AnalyticDataProps = NativeStackScreenProps<RootStackParamList, 'AnalyticData'>;

const AnalyticData = ({ navigation }: AnalyticDataProps) => {




  const handleSheetChange = (index: number) => {
//    navigation.navigate("")
  };


  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icons name="left" size={20} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Prakash Watch Center</Text>
      </View>


   

    </View>
  );
};

export default AnalyticData;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    navContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    backButton: {
      marginRight: 10,
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    orderDetailsText: {
      fontSize: 18,
      marginBottom: 20,
    },
    tableContainer: {
      width: '100%',
    },
    tableHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingBottom: 10,
      marginBottom: 10,
    },
    tableHeaderText: {
      fontSize: 16,
      fontWeight: 'bold',
      flex: 1,
      textAlign: 'center',
    },
    tableRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 5,
    },
    tableRowText: {
      fontSize: 16,
      flex: 1,
      textAlign: 'center',
    },
    totalRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      paddingTop: 10,
      marginTop: 10,
    },
    totalText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    totalPrice: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    proceedButton: {
      backgroundColor: '#007bff',
      borderRadius: 5,
      paddingVertical: 15,
      alignItems: 'center',
      width: '95%',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 20,
    },
    proceedButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
