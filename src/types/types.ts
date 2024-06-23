import type { RouteProp } from '@react-navigation/native';

export type RootStackParamList = {
  Drawer: undefined;
  Home: undefined;
  Details: { title: string };
  Settings: undefined;
  SplashScreen: undefined;
  DashScreen: undefined;
  DrawerNavigator: undefined;
  AuthScreen: undefined;
  LoginScreen: undefined;
  SellerRegistrationScreen: undefined;
  DeliveryBoyLoginScreen: undefined;
  OtpScreen: { phoneNumber: string };
  NoticeBoardScreen: undefined;
  AnalyticData: undefined;
  ChatDetails:undefined;
  DailyOrderDetails: undefined;
  FillProduct: undefined;


};

export type RootDrawerParamList = {
  DashScreen: undefined;
  DrawerNavigator: undefined;
  AnalyticsScreen: undefined;
  ChatsScreen: undefined;
  CreateTemplatesScreen: undefined;
  DailyOrdersScreen: undefined;
  DeliveryScreen: undefined;
  EditStockScreen: undefined;
  KhataScreen: undefined;
  OrderHistoryScreen: undefined;
  UploadProductScreen: undefined;
  SettingsScreen: undefined;
  AnalyticData: undefined;
  ChatDetails:undefined;
  DailyOrderDetails: undefined;
  FillProduct: undefined;




};
