import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import ReviewDetails from '../components/ReviewDetails';

const Stack = createStackNavigator();

export const AppNavigator = () => (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center', headerTintColor: '#007a33', height: 60}}>
      <Stack.Screen name="Home" options={{ title: 'Starchucks-Review' }} component={ Home } />
      <Stack.Screen name="ReviewDetails" options={{ title: 'Details' }} component={ ReviewDetails } />
    </Stack.Navigator>
);
