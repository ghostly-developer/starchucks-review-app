import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './HomeStack'
import { AboutNavigator } from './AboutStack';

import { Ionicons } from "@expo/vector-icons";
const RootTabs = createBottomTabNavigator();


export default function AppTabs() {
  return (
    <NavigationContainer>
      <RootTabs.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: '#007a33', tabBarInactiveTintColor: 'darkgray'}} initialRouteName="HomeStack">
        <RootTabs.Screen name="HomeStack" options={{ title: 'Home', 
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="md-home-outline"
                  size={24}
                  color={tabInfo.focused ? "#007a33" : "#8e8e93"}
                />
              );
        }}} component={ AppNavigator } />
        <RootTabs.Screen name="AboutStack"  options={{ title: 'About',
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="information-circle-outline"
                  size={26}
                  color={tabInfo.focused ? "#007a33" : "#8e8e93"}
                />
              );
        }}} component={ AboutNavigator } />
      </RootTabs.Navigator>
    </NavigationContainer>
  );
}
