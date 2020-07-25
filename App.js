import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View , Image, TextInput, TouchableOpacity,Alert } from 'react-native';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import SplashScreen from './src/SplashScreen';
import ViewPayments from './src/ViewPayments';
import RegisterNewTruck from './src/RegisterNewTruck';
import Payments from './src/Payments';

const ViewPaymentsNavigator = createStackNavigator({
  'View Payments':{screen: ViewPayments,
    navigationOptions: ({navigation}) => ({
      headerLeft: () => (
        <TouchableOpacity
        style={{marginLeft: 20}}
        onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" size={25} /></TouchableOpacity>
        )})
      },
    });

const RegisterNewTruckNavigator = createStackNavigator({
  'Register New Truck':{screen: RegisterNewTruck,
    navigationOptions: ({navigation}) => ({
    headerLeft: () => (
     <TouchableOpacity
     style={{marginLeft: 20}}
     onPress={() => navigation.toggleDrawer()}>
     <Icon name="menu" size={25} /></TouchableOpacity>
     )})
    },
   });

   const PaymentsNavigator = createStackNavigator({
    'Payments':{screen: Payments,
      navigationOptions: ({navigation}) => ({
      headerLeft: () => (
       <TouchableOpacity
       style={{marginLeft: 20}}
       onPress={() => navigation.toggleDrawer()}>
       <Icon name="menu" size={25} /></TouchableOpacity>
       )})
      },
     });


     const DrawerNavigator = createDrawerNavigator({
      ViewPayments: {
        navigationOptions: {
          drawerLabel: 'View Payments', 
        },
        screen: ViewPaymentsNavigator,
      },

      RegisterNewTruck: {
        navigationOptions: {
          drawerLabel: 'Register New Truck', 
        },
        screen: RegisterNewTruckNavigator,
      },

      Payments: {
        navigationOptions: {
          drawerLabel: 'Make Payments', 
        },
        screen: PaymentsNavigator,
      },
});

const AppSwitchNavigator = createSwitchNavigator({
  'SplashScreen' : {screen: SplashScreen},
  'Drawer' : {screen: DrawerNavigator}
},
{
  initialRouteName: 'SplashScreen'
})

const App = createAppContainer(AppSwitchNavigator);
export default App;