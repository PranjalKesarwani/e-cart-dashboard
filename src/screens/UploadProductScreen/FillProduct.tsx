import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import Icons from 'react-native-vector-icons/Feather';

type FillProductProps = NativeStackScreenProps<RootStackParamList, 'FillProduct'>;

const FillProduct = ({ navigation }: FillProductProps) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [description, setDescription] = useState('');

  const handleUploadProduct = () => {
    // Handle the product upload logic here
    console.log({ productName, price, discount, description });
  };

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icons name="arrow-left" size={24} color={'black'} />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Product Name</Text>
        <TextInput
          style={styles.input}
          value={productName}
          onChangeText={setProductName}
          placeholder="Enter product name"
        />

        <Text style={styles.inputLabel}>Price</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Enter price"
          keyboardType="numeric"
        />

        <Text style={styles.inputLabel}>Discount</Text>
        <TextInput
          style={styles.input}
          value={discount}
          onChangeText={setDiscount}
          placeholder="Enter discount"
          keyboardType="numeric"
        />

        <Text style={styles.inputLabel}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter description"
          multiline
        />
      </View>

      <TouchableOpacity style={styles.uploadButton} onPress={handleUploadProduct}>
        <Text style={styles.uploadButtonText}>Upload Product</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FillProduct;

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
  inputContainer: {
    flex: 1,
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  uploadButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
