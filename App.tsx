import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';


import { Route } from './src/routes';
import { Home } from './src/screens/Home';
import { Profile } from './src/screens/Profile';
import { THEME } from './styles/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style='dark'/>
        <Route/>
    </NativeBaseProvider>
  )
};