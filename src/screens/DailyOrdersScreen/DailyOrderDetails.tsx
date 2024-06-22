import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import Icons from 'react-native-vector-icons/AntDesign';

type OrderItem = {
  serialNumber: number;
  item: string;
  quantity: number;
  price: number;
  amount: number;
};

type DailyOrderDetailsProps = NativeStackScreenProps<RootStackParamList, 'DailyOrderDetails'>;

const DailyOrderDetails = ({ navigation }: DailyOrderDetailsProps) => {
  const orderItems: OrderItem[] = [
    { serialNumber: 1, item: 'Watch', quantity: 2, price: 100, amount: 200 },
    { serialNumber: 2, item: 'Bracelet', quantity: 1, price: 50, amount: 50 },
    // Add more items as needed
  ];

  const discount = 20; // Example discount
  const totalAmount = orderItems.reduce((acc, item) => acc + item.amount, 0);
  const totalPayableAmount = totalAmount - discount;

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icons name="left" size={20} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Prakash Watch Center</Text>
      </View>

      {/* Table of Order Details */}
      <FlatList
        data={orderItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={styles.tableRowText}>{item.serialNumber}</Text>
            <Text style={styles.tableRowText}>{item.item}</Text>
            <Text style={styles.tableRowText}>{item.quantity}</Text>
            <Text style={styles.tableRowText}>{item.price}</Text>
            <Text style={styles.tableRowText}>{item.amount}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>S. No.</Text>
            <Text style={styles.tableHeaderText}>Item</Text>
            <Text style={styles.tableHeaderText}>Qty</Text>
            <Text style={styles.tableHeaderText}>Price</Text>
            <Text style={styles.tableHeaderText}>Amount</Text>
          </View>
        )}
        ListFooterComponent={() => (
          <View>
            <View style={styles.totalRow}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalPrice}>{totalAmount}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalText}>Discount:</Text>
              <Text style={styles.totalPrice}>{discount}</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={styles.totalText}>Total Payable:</Text>
              <Text style={styles.totalPrice}>{totalPayableAmount}</Text>
            </View>
          </View>
        )}
      />

      {/* Proceed Button */}
      <TouchableOpacity style={styles.proceedButton}>
        <Text style={styles.proceedButtonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DailyOrderDetails;

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
