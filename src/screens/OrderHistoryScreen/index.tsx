import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { RootDrawerParamList } from '../../types/types';

type OrderHistoryScreenProps = NativeStackScreenProps<RootDrawerParamList, 'OrderHistoryScreen'>;

const OrderHistoryScreen = ({ navigation }: OrderHistoryScreenProps) => {
  const orders = [
    {
      id: '1',
      title: 'Order #1',
      person: 'John Doe',
      date: '2024-06-21',
      time: '2:30 PM',
      status: 'Waiting',
    },
    {
      id: '2',
      title: 'Order #2',
      person: 'Jane Smith',
      date: '2024-06-21',
      time: '3:00 PM',
      status: 'Cancelled',
    },
    {
      id: '3',
      title: 'Order #3',
      person: 'Alice Johnson',
      date: '2024-06-21',
      time: '4:15 PM',
      status: 'Rejected',
    },
    {
      id: '4',
      title: 'Order #3',
      person: 'Alice Johnson',
      date: '2024-06-21',
      time: '4:15 PM',
      status: 'Rejected',
    },
    {
      id: '5',
      title: 'Order #3',
      person: 'Alice Johnson',
      date: '2024-06-21',
      time: '4:15 PM',
      status: 'Rejected',
    },
    // Add more orders as needed
  ];

  const handleCardPress = (orderId: string) => {
    navigation.navigate("DailyOrderDetails");
  };

  const renderItem = ({ item }: { item: { id: string, title: string, person: string, date: string, time: string, status: string } }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item.id)}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardText}>Name: {item.person}</Text>
      <Text style={styles.cardText}>Date: {item.date}</Text>
      <Text style={styles.cardText}>Time: {item.time}</Text>
      <Text style={styles.cardText }>Status: {item.status}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 10,
  },
  card: {
    width: '95%',
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  waiting: {
    color: 'orange',
  },
  cancelled: {
    color: 'red',
  },
  rejected: {
    color: 'grey',
  },
});
