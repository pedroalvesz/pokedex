import {useEffect} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Heading, HStack, IconButton, Image, VStack } from "native-base";
import { CaretLeft } from "phosphor-react-native";

import { SearchBar } from "../Components/SearchBar";
import axios from "axios";


type RouteParams = {
  pokemonId: number,
}

export function Profile() {

  const navigation = useNavigation()
  function handleGoBack() {
    navigation.goBack()
  }
  
  const route = useRoute();
  const {pokemonId} = route.params as RouteParams

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        const {name, types, abilities} = response.data

      } catch(error) {
        console.log(error)
      }
    }

    getDetails()
  }, [])

  return(
    <VStack
    flex={1}
    bg="gray.800"
    >
      <HStack
      w="100%"
      mt="70px"
      px={6}
      alignItems="center"
      justifyContent="space-between"
      >
        <IconButton
        w="24px"
        h="24px"
        onPress={handleGoBack}
        icon={<CaretLeft size={32} color="black"/>}
        />
        <VStack
        w="80%"
        >
        </VStack>
      </HStack>
      <VStack
      h="350"
      justifyContent="center"
      alignItems="center"
      >
        <Image w="250" h="250" source={require('../assets/pokeball_white.png')} alt={'pokeball'}/>
        <Heading>{pokemonId}</Heading>
      </VStack>
      <VStack
      rounded="3xl"
      bg="white"
      h="400px"
      >
      </VStack>
    </VStack>
  )
}