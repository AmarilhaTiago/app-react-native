
import { StatusBar, SafeAreaView } from 'react-native';
import React from 'react';  
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';
import AppLoading from 'expo-app-loading';

import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


export default function App() {

  const [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fontsLoaded){
    return <AppLoading />
  }else{
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Cesta {...mock} />
      </SafeAreaView>
    );
  }
}
