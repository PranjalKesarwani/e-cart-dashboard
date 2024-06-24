import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { RootDrawerParamList } from '../../types/types'; 

type SettingsScreenProps = NativeStackScreenProps<RootDrawerParamList, "SettingsScreen">;

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const [isShopOpen, setIsShopOpen] = useState(true);
  const [isSelfDelivery, setIsSelfDelivery] = useState(true);

  const toggleShopStatus = () => setIsShopOpen((previousState) => !previousState);
  const toggleDeliveryOption = () => setIsSelfDelivery((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Shop Status</Text>
        <Switch
          value={isShopOpen}
          onValueChange={toggleShopStatus}
        />
      </View>
      <View style={styles.separator} />

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Self Delivery</Text>
        <Switch
          value={isSelfDelivery}
          onValueChange={toggleDeliveryOption}
        />
      </View>
      <View style={styles.separator} />

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>No Delivery</Text>
        <Switch
          value={!isSelfDelivery}
          onValueChange={toggleDeliveryOption}
        />
      </View>
      <View style={styles.separator} />

      <TouchableOpacity style={styles.settingItem} onPress={() => console.log("hello world")}>
        <Text style={styles.settingText}>Edit Shop Info</Text>
      </TouchableOpacity>
      <View style={styles.separator} />

      <TouchableOpacity style={styles.settingItem} onPress={()=>navigation.navigate("DeliveryPolicy")}>
        <Text style={styles.settingText}>Make Delivery Policy</Text>
      </TouchableOpacity>
      <View style={styles.separator} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  settingText: {
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
});
