import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../components/About';


const AboutStack = createStackNavigator();

export const AboutNavigator = () => (
    <AboutStack.Navigator initialRouteName="About" screenOptions={{headerTitleAlign: 'center', headerTintColor: '#007a33', height: 60}}>
      <AboutStack.Screen name="About" options={{ title: 'About' }} component={ About } />
    </AboutStack.Navigator>
);
