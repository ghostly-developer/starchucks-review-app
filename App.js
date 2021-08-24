import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';

import AppNavigator from "./routes/Tabs";

function getFonts(){
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito/Nunito-Bold.ttf')
  });
}
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <View style={{flex: 1,}}>
        <StatusBar style="auto" /> 
        <AppNavigator />
      </View>
    );
  } else {
    return (
      <AppLoading 
        startAsync={ getFonts }
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
}

