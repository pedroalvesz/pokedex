import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Home } from './src/screens/Home';

export default function App() {
  return (
    <NativeBaseProvider>
      <Home/>
    </NativeBaseProvider>
  )
};