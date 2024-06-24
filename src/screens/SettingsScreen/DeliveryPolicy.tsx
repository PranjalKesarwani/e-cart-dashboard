import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import Icons from 'react-native-vector-icons/AntDesign';

type DeliveryPolicyProps = NativeStackScreenProps<RootStackParamList, 'DeliveryPolicy'>;

const DeliveryPolicy = ({ navigation }: DeliveryPolicyProps) => {
  const [policyText, setPolicyText] = useState('');

  const handleUploadPolicy = () => {
    // Handle the upload policy logic here
    console.log('Policy uploaded:', policyText);
  };

  const handleAddPolicy = () => {
    // Handle the add policy logic here
    console.log('Policy added:', policyText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icons name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Delivery Policy</Text>
      </View>

      <TextInput
        style={styles.input}
        value={policyText}
        onChangeText={setPolicyText}
        placeholder="Enter policy"
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddPolicy}>
        <Text style={styles.buttonText}>Add Policy</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.uploadButton} onPress={handleUploadPolicy}>
        <Text style={styles.buttonText}>Upload Policy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeliveryPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: '#28a745',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '95%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
