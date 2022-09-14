import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../../screens/Home";

const {Navigator, Screen } = createNativeStackNavigator()


export function Stack() {
  return(
    <Navigator>
      <Screen/>
    </Navigator>
  )
}