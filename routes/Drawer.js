import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './HomeStack'
import { AboutNavigator } from './AboutStack';

const RootDrawer = createDrawerNavigator();


export default function AppDrawer() {
  return (
    <NavigationContainer>
      <RootDrawer.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <RootDrawer.Screen name="Home" component={ AppNavigator } />
        <RootDrawer.Screen name="About" component={ AboutNavigator } />
      </RootDrawer.Navigator>
    </NavigationContainer>
  );
}

/*
    Spare Navigation Method. Just change the import to this file in App.js
*/