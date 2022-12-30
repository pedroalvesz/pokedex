import {VStack, Center, Image, Text} from 'native-base'

export function Favorites() {
  return(
    <VStack
    flex={1}
    pt="45px"
    px={6}
    bg="white"
    >
      <Center pb={5}>
      <Image w="200px" h="75px" source={require('../assets/logo.png')} alt="Pokedex Logo"/>
      </Center>

      <Text>FAVORITES</Text>

    </VStack>
  )
}