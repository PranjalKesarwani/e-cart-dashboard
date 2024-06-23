import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootDrawerParamList } from '../../types/types';

type EditStockScreenProps = NativeStackScreenProps<RootDrawerParamList, 'EditStockScreen'>;

const EditStockScreen = ({ navigation }: EditStockScreenProps) => {
  // Mock data for scrollable cards
  const stockItems = [
    { id: 1, name: 'Item 1', quantity: 10 },
    { id: 2, name: 'Item 2', quantity: 5 },
    { id: 3, name: 'Item 3', quantity: 8 },
    { id: 4, name: 'Item 4', quantity: 12 },
    { id: 5, name: 'Item 5', quantity: 6 },
    { id: 6, name: 'Item 6', quantity: 15 },
    // Add more items as needed
  ];

  return (
    <View style={styles.container}>
      {/* Search Filter */}
      <TextInput
        style={styles.searchFilter}
        placeholder="Search Item"
        placeholderTextColor="#888"
      />

      {/* Scrollable Cards */}
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {stockItems.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => console.log("Hello world")}
          >
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardQuantity}>Quantity: {item.quantity}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default EditStockScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchFilter: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardQuantity: {
    fontSize: 14,
  },
});
