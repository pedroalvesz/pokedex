import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { AppContextProvider } from './src/contexts/AppContext';


import { Routes } from './src/routes';
import { Favorites } from './src/screens/Favorites';
import { THEME } from './styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <AppContextProvider>
        <StatusBar style='dark'/>
        <Routes/>
      </AppContextProvider>
    </NativeBaseProvider>
  )
};