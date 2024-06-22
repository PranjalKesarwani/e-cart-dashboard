import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

type KhataScreenProps = {
  navigation: any; // Adjust navigation type as per your navigation setup
};

const KhataScreen = ({ navigation }: KhataScreenProps) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [info, setInfo] = useState('');

  // Mock data for scrollable cards
  const cardData = [
    { id: 1, title: 'Card 1', description: 'Description for Card 1' },
    { id: 2, title: 'Card 2', description: 'Description for Card 2' },
    { id: 3, title: 'Card 3', description: 'Description for Card 3' },
    { id: 4, title: 'Card 4', description: 'Description for Card 4' },
    { id: 5, title: 'Card 5', description: 'Description for Card 5' },
    { id: 6, title: 'Card 6', description: 'Description for Card 6' },
    { id: 7, title: 'Card 6', description: 'Description for Card 6' },
    { id: 8, title: 'Card 6', description: 'Description for Card 6' },
    { id: 9, title: 'Card 6', description: 'Description for Card 6' },
    // Add more cards as needed
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCreateKhata = () => {
    // Perform creation logic here (e.g., API call)
    console.log('Creating Khata with name:', name, 'and info:', info);

    // Reset form and close modal
    setName('');
    setInfo('');
    toggleModal();
  };

  return (
    <View style={styles.container}>
     

      {/* Search Filter */}
      <TextInput
        style={styles.searchFilter}
        placeholder="Search Khata"
        placeholderTextColor="#888"
      />

      {/* Scrollable Cards */}
      <ScrollView style={styles.cardContainer}>
        {cardData.map(card => (
          <View key={card.id} style={styles.card}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Create Khata Button */}
      <TouchableOpacity style={styles.createKhataButton} onPress={toggleModal}>
        <Text style={styles.createKhataButtonText}>Create Khata</Text>
      </TouchableOpacity>

      {/* Modal for Creating Khata */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Create New Khata</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Info"
              value={info}
              onChangeText={text => setInfo(text)}
              multiline
              numberOfLines={4}
            />
            <TouchableOpacity style={styles.createButton} onPress={handleCreateKhata}>
              <Text style={styles.createButtonText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={toggleModal}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default KhataScreen;

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
    flex: 1,
    marginBottom: 20,
  },
  card: {
    width: '99%',
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
  cardDescription: {
    fontSize: 14,
  },
  createKhataButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
  },
  createKhataButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    width: '90%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  createButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  createButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  cancelButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
