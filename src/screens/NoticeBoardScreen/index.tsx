import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../types/types';
import Title from '../../components/Title';

type NoticeBoardScreenProps = NativeStackScreenProps<RootStackParamList, "NoticeBoardScreen">;

const NoticeBoardScreen = ({ navigation }: NoticeBoardScreenProps) => {
  return (
    <View style={styles.container}>
              <Title fontSize={36} fontWeight={"bold"} />

      <Text style={styles.message}>Registration Successful....</Text>
      <Text style={styles.subMessage}>Please wait for the approval!</Text>
    </View>
  );
};

export default NoticeBoardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f7',
    padding: 16,
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'green',  // Optional: to add a color to the text
  },
  subMessage: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color:"#ff8c00"
  },
});
