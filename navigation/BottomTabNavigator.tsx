import { EvilIcons,AntDesign ,MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
// screens
import HomeScreen from '../screens/Home';
import NotificationScreen from '../screens/Notification';
import OfferScreen from '../screens/Offer';
import AccountScreen from '../screens/Account';

import { BottomTabParamList, } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint,showLabel:false }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) =><AntDesign name="home" size={20} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="bell" size={20} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Offer"
        component={OfferScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="local-offer" size={20} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="user" size={20} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}


