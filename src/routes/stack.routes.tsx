import { createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack'
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';


const {Navigator, Screen} = createNativeStackNavigator<StackRoutes>()

type StackRoutes = {
  home: undefined;
  profile: {id: number};
}

export type StackRoutesNavigationProps = NativeStackNavigationProp<StackRoutes>

export function HomeProfileRoute() {
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name='home' component={Home}/>
      <Screen name='profile' component={Profile}/>
    </Navigator>
  )
}