import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screens import

import DashScreen from '../screens/DashScreen';
import { RootDrawerParamList } from '../types/types';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import ChatsScreen from '../screens/ChatsScreen';
import CreateTemplatesScreen from '../screens/CreateTemplatesScreen';
import DailyOrdersScreen from '../screens/DailyOrdersScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import EditStockScreen from '../screens/EditStockScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import UploadProductScreen from '../screens/UploadProductScreen';
import SettingsScreen from '../screens/SettingsScreen';
import KhataScreen from '../screens/KhataScreen';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator<RootDrawerParamList>();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="AnalyticsScreen" component={AnalyticsScreen} />
      <Drawer.Screen name="DashScreen" component={DashScreen} />
      <Drawer.Screen name="ChatsScreen" component={ChatsScreen} />
      <Drawer.Screen name="CreateTemplatesScreen" component={CreateTemplatesScreen} />
      <Drawer.Screen name="DailyOrdersScreen" component={DailyOrdersScreen} />
      <Drawer.Screen name="DeliveryScreen" component={DeliveryScreen} />
      <Drawer.Screen name="EditStockScreen" component={EditStockScreen} />
      <Drawer.Screen name="OrderHistoryScreen" component={OrderHistoryScreen} />
      <Drawer.Screen name="UploadProductScreen" component={UploadProductScreen}  />
      <Drawer.Screen name="KhataScreen" component={KhataScreen}  />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen}  />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
