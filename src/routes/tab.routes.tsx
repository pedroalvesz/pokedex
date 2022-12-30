import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs'

const {Navigator, Screen} = createBottomTabNavigator<TabRoutes>()


import { Home } from '../screens/Home';
import { Favorites } from '../screens/Favorites';
import { Profile } from '../screens/Profile';

export type TabRoutes = {
  home: undefined;
  profile: {id: number}
  favorites: undefined;
}

export type TabRoutesNavigationProps = BottomTabNavigationProp<TabRoutes>

export function TabRoutes() {
  return(
    <Navigator screenOptions={{ headerShown: false}}>
      <Screen name='home' component={Home}/>
      <Screen name='profile' component={Profile} options={{tabBarButton: () => null}}/>
      <Screen name= 'favorites' component={Favorites}/>
    </Navigator>
  )
}