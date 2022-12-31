import { Platform } from 'react-native'
import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs'

import { Home } from '../screens/Home';
import { Favorites } from '../screens/Favorites';
import { Profile } from '../screens/Profile';
import HomeSvg from '../assets/home.svg'
import FavoriteSvg from '../assets/star.svg'
import { useTheme } from 'native-base';



const {Navigator, Screen} = createBottomTabNavigator<TabRoutes>()


export type TabRoutes = {
  home: undefined;
  profile: {id: number}
  favorites: undefined;
}

export type TabRoutesNavigationProps = BottomTabNavigationProp<TabRoutes>


export function TabRoutes() {

  const {colors} = useTheme()

  const ICON_SIZE = 32

  return(
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.electric,
      tabBarInactiveTintColor: colors.gray[600],
      tabBarStyle: {
        position: 'absolute',
        borderTopWidth: 0,
        borderRadius: 32,
        backgroundColor: colors.gray[100],
        height: Platform.OS === 'android' ? 'auto' : 64,
        paddingTop: 24,
        bottom: 24,
        marginHorizontal: 88,
      }
      }}>

      <Screen
      name='home'
      component={Home}
      options={{tabBarIcon:({color}) => <HomeSvg fill={color} width={ICON_SIZE} height={ICON_SIZE}/>}}
      />
      
      <Screen
      name='profile'
      component={Profile}
      options={{tabBarButton: () => null}}
      />
      
      <Screen
      name= 'favorites'
      component={Favorites}
      options={{tabBarIcon: ({color}) => <FavoriteSvg fill={color} width={ICON_SIZE} height={ICON_SIZE}/>}}
      />

    </Navigator>
  )
}