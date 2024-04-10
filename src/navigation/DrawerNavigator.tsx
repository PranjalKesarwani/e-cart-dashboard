import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//screens import

import DashScreen from '../screens/DashScreen';
import { RootDrawerParamList } from '../types/types';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator<RootDrawerParamList>();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="DashScreen" component={DashScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
