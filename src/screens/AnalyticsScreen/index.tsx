import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootDrawerParamList } from '../../types/types';

type AnalyticsScreenProps = NativeStackScreenProps<RootDrawerParamList, 'AnalyticsScreen'>;

const AnalyticsScreen = ({ navigation }: AnalyticsScreenProps) => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const data = Array.from({ length: 10 }, (_, i) => ({ id: i.toString(), title: `Card ${i + 1}` }));

  const handleCardPress = (item: any) => {
    setSelectedItem(item);
    navigation.navigate("AnalyticData")
  };



  const handleSheetChange = (index: number) => {
    if (index === -1) {
      setSelectedItem(null);
    }
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
      />
   
    </View>
  );
};

export default AnalyticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    margin: 10,
    height: Dimensions.get('window').width / 2 - 30, // Square card
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheetContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
