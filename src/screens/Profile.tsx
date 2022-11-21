import {useEffect, useState} from "react";
import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import { Heading, HStack, IconButton, Image, VStack } from "native-base";
import { CaretLeft } from "phosphor-react-native";

import { SearchBar } from "../Components/SearchBar";
import api from "../services/api"

interface RouteParams {
  pokemonId: number,
}

interface PokemonProps {
  name: string;
  types: {
    0: {
      type: {
        name: string;
      }
    }
    1?: {
      type?: {
        name?: string;
      }
    }
  };
  abilities: {
    0: {
      ability: {
        name: string;
      }
    }
  };
  typeColor: string;
}

export function Profile() {

  const {colors} = useTheme()
  const navigation = useNavigation()
  const [pokemon, setPokemon] = useState({} as PokemonProps)
  const route = useRoute();
  const {pokemonId} = route.params as RouteParams

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await api.get(`/pokemon/${pokemonId}`)
        const {name, types, abilities} = response.data
        
        const typeColor = types[0].type.name;
        setPokemon({name, types, abilities, typeColor})
        console.log(pokemon)
      } catch(error) {
        console.log(error)
      }
    }

    getDetails()
  }, [])

  function handleGoBack() {
    navigation.goBack()
  }

  return(
    <VStack
    flex={1}
    bg={pokemon.typeColor}
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
        <Image w="300" h="300" source={require('../assets/pokeball_white.png')} alt={'pokeball'}/>
        <Image position='absolute' zIndex={1} source={{uri : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}} alt="Alternate Text" size="2xl"/>
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