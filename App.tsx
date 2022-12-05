import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';


import { Routes } from './src/routes';
import { THEME } from './styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style='dark'/>
        <Routes/>
    </NativeBaseProvider>
  )
};