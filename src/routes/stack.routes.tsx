import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'

const {Screen, Navigator} = createNativeStackNavigator<StackRoutes>()


import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';


type StackRoutes = {
  home: undefined;
  profile: undefined;
}

export type StackRoutesNavigationProps = NativeStackNavigationProp<StackRoutes>

export function StackRoutes() {
  return(
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name="home" component={Home}/>
      <Screen name="profile" component={Profile}/>
    </Navigator>
  )
}

