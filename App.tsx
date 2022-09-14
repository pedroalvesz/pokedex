import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';


import { Home } from './src/screens/Home';
import { THEME } from './styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style='dark'/>
        <Home/>
    </NativeBaseProvider>
  )
};