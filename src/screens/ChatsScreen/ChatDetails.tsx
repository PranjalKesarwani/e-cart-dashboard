import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/types';
import Icons from 'react-native-vector-icons/AntDesign';

type ChatDetailsProps = NativeStackScreenProps<RootStackParamList, 'ChatDetails'>;

const ChatDetails = ({ navigation }: ChatDetailsProps) => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello!', sender: 'other', timestamp: '2:30 PM', date: '2023-06-20' },
    { id: '2', text: 'Hi! How are you?', sender: 'me', timestamp: '2:31 PM', date: '2023-06-20' },
    { id: '3', text: 'I am good, thanks! How about you?', sender: 'other', timestamp: '2:32 PM', date: '2023-06-21' },
    { id: '4', text: 'Doing great!', sender: 'me', timestamp: '2:33 PM', date: '2023-06-21' },
    { id: '5', text: 'What are you up to?', sender: 'other', timestamp: '2:34 PM', date: '2023-06-22' },
    { id: '6', text: 'Just working on a project.', sender: 'me', timestamp: '2:35 PM', date: '2023-06-22' },
    { id: '7', text: 'Sounds interesting!', sender: 'other', timestamp: '2:36 PM', date: '2023-06-22' },
    { id: '8', text: 'Yeah, it is. Need to finish it soon.', sender: 'me', timestamp: '2:37 PM', date: '2023-06-22' },
    { id: '9', text: 'Good luck with that!', sender: 'other', timestamp: '2:38 PM', date: '2023-06-22' },
    { id: '10', text: 'Thanks!', sender: 'me', timestamp: '2:39 PM', date: '2023-06-22' },
    { id: '11', text: 'Are you free this weekend?', sender: 'other', timestamp: '2:40 PM', date: '2023-06-22' },
    { id: '12', text: 'Yes, I am. Any plans?', sender: 'me', timestamp: '2:41 PM', date: '2023-06-22' },
    { id: '13', text: 'How about a movie?', sender: 'other', timestamp: '2:42 PM', date: '2023-06-22' },
    { id: '14', text: 'Sure, sounds good!', sender: 'me', timestamp: '2:43 PM', date: '2023-06-22' },
    { id: '15', text: 'Great! Let’s meet at 6 PM.', sender: 'other', timestamp: '2:44 PM', date: '2023-06-22' },
    { id: '16', text: 'See you then!', sender: 'me', timestamp: '2:45 PM', date: '2023-06-22' },
    { id: '17', text: 'Take care!', sender: 'other', timestamp: '2:46 PM', date: '2023-06-22' },
    { id: '18', text: 'You too!', sender: 'me', timestamp: '2:47 PM', date: '2023-06-22' },
    { id: '19', text: 'Bye!', sender: 'other', timestamp: '2:48 PM', date: '2023-06-22' },
    { id: '20', text: 'Bye!', sender: 'me', timestamp: '2:49 PM', date: '2023-06-22' },
  ]);

  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: (messages.length + 1).toString(),
        text: inputText,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        date: new Date().toISOString().split('T')[0], // Format date as YYYY-MM-DD
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setInputText('');
    }
  };

  const renderItem = ({ item }: { item: { id: string, text: string, sender: string, timestamp: string, date: string } }) => (
    <View>
      {renderDateSeparator(item)}
      <View style={[styles.messageContainer, item.sender === 'me' ? styles.myMessage : styles.otherMessage]}>
        <Text style={styles.messageText}>{item.text}</Text>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
      </View>
    </View>
  );

  const renderDateSeparator = (item: { id: string, date: string }) => {
    const index = messages.findIndex(msg => msg.id === item.id);
    if (index === 0 || messages[index - 1].date !== item.date) {
      return (
        <View style={styles.dateSeparator}>
          <Text style={styles.dateSeparatorText}>{formatDate(item.date)}</Text>
        </View>
      );
    }
    return null;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' }  ;
    return date.toLocaleDateString(undefined, options as any );
  };

  return (
    <View style={styles.container}>
      <View style={styles.navContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icons name="left" size={20} color={'black'} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Prakash Watch Center</Text>
      </View>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.messagesList}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type a message"
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Icons name="arrowright" size={24} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messagesList: {
    flex: 1,
  },
  messageContainer: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: '70%',
  },
  myMessage: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  otherMessage: {
    backgroundColor: '#ECECEC',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  dateSeparator: {
    alignItems: 'center',
    marginVertical: 10,
  },
  dateSeparatorText: {
    backgroundColor: '#ECECEC',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    color: '#555',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    padding: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007bff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
