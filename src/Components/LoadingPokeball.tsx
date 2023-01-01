import { VStack } from 'native-base';
import { Dimensions } from 'react-native'
import Lottie from 'lottie-react-native';


export function LoadingPokeball() {

  const ScreenHeight = Dimensions.get('screen').height / 2.3

  return(
    <VStack position='absolute' alignSelf='center' bottom={ScreenHeight}>
      <Lottie
      source={require('../assets/pokeball-loading.json')}
      autoPlay
      loop
      style={{
        width: 96
      }}
      />
    </VStack>
  )
}