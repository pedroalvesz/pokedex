import { Center, Image } from "native-base";


export function Header() {
  return(
    <Center pb={5}>
      <Image w="200px" h="75px" source={require('../assets/logo.png')} alt="Pokedex Logo"/>
    </Center>
  )
}