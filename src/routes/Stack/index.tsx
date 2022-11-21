import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../../screens/Home";
import { Profile } from "../../screens/Profile";

const { Navigator, Screen } = createNativeStackNavigator()


export function Stack() {
  return(
    // A primeira rota sempre será a primeira screen.
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home}/>
      <Screen name="profile" component={Profile}/>
    </Navigator>
  )
}