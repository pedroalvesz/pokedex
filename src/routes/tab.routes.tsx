import { Platform } from 'react-native'
import { useTheme } from 'native-base';
import { createBottomTabNavigator, BottomTabNavigationProp} from '@react-navigation/bottom-tabs'

import { Favorites } from '../screens/Favorites';

import HomeSvg from '../assets/home.svg'
import FavoriteSvg from '../assets/star.svg'
import { HomeProfileRoute } from './stack.routes';



const {Navigator, Screen} = createBottomTabNavigator<TabRoutes>()


export type TabRoutes = {
  dashboard: undefined;
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
        shadowColor: colors.gray[900],
        shadowOffset: {
          height: 10,
          width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
      }
      }}>

      <Screen
      name='dashboard'
      component={HomeProfileRoute}
      options={{tabBarIcon:({color}) => <HomeSvg fill={color} width={ICON_SIZE} height={ICON_SIZE}/>}}
      />

      <Screen
      name= 'favorites'
      component={Favorites}
      options={{tabBarIcon: ({color}) => <FavoriteSvg fill={color} width={ICON_SIZE} height={ICON_SIZE}/>}}
      />

    </Navigator>
  )
}