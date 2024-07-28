import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, PermissionsAndroid } from 'react-native';
import { RootDrawerParamList } from '../../types/types';
import Geolocation from 'react-native-geolocation-service';


type ChatsScreenProps = NativeStackScreenProps<RootDrawerParamList, "ChatsScreen">;

const mockChats = [
  {
    id: '1',
    name: 'John Doe',
    message: 'Hey, how are you?',
    timestamp: '2:30 PM',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '2',
    name: 'Jane Smith',
    message: 'Are we still on for tomorrow?',
    timestamp: '1:15 PM',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '3',
    name: 'Michael Johnson',
    message: 'Can you send me the report?',
    timestamp: '12:45 PM',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '4',
    name: 'Emily Davis',
    message: 'Let’s catch up later.',
    timestamp: '11:30 AM',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '5',
    name: 'Chris Brown',
    message: 'Got it, thanks!',
    timestamp: '10:20 AM',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '6',
    name: 'Jessica Williams',
    message: 'Happy Birthday!',
    timestamp: '9:05 AM',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '7',
    name: 'David Wilson',
    message: 'I’ll be there in 5 minutes.',
    timestamp: '8:00 AM',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '8',
    name: 'Sophia Martinez',
    message: 'Can we reschedule our meeting?',
    timestamp: 'Yesterday',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '9',
    name: 'Daniel Anderson',
    message: 'Thanks for the update.',
    timestamp: '2 days ago',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '10',
    name: 'Olivia Thomas',
    message: 'See you soon!',
    timestamp: '3 days ago',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '11',
    name: 'Matthew Taylor',
    message: 'Please review the attached document.',
    timestamp: '4 days ago',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '12',
    name: 'Ava Lee',
    message: 'Got any plans for the weekend?',
    timestamp: '5 days ago',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '13',
    name: 'James White',
    message: 'Thank you!',
    timestamp: '6 days ago',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  {
    id: '14',
    name: 'Mia Harris',
    message: 'I’ll get back to you ASAP.',
    timestamp: '1 week ago',
    avatar: 'https://via.placeholder.com/150', // Placeholder image
  },
  // Add more mock chat data as needed
];


const ChatsScreen = ({ navigation }: ChatsScreenProps) => {


  const [location, setLocation] = useState<any>(null);
  const [hasLocation, setHasLocation] = useState<any>(false);



  const checkLocation = async () => {
    try {
      console.log("check locatoin try block")
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location? ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === 'granted') {
        Geolocation.getCurrentPosition(
          position => {
            setLocation(position);
            setHasLocation(true);
            console.log("----",position);
          },
          error => {
            console.log(error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      }
    } catch (err) {
      console.log("check locatoin catch block")

      console.log(err);
    }
  };

  const storeLocation = async () => {
    if (hasLocation) {
      try {
       console.log("called location api and stored the users location")
        // });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const renderItem = ({ item }: { item: typeof mockChats[0] }) => (
    <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate("ChatDetails")}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTimestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    console.log("use effect called for first render")
    checkLocation();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={mockChats}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  chatInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatTimestamp: {
    fontSize: 12,
    color: '#999',
  },
  chatMessage: {
    fontSize: 14,
    color: '#666',
  },
});
