import {useEffect, useState} from "react";
import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import { Heading, HStack, IconButton, Image, VStack, Box, Text } from "native-base";
import { CaretLeft, CaretRight } from "phosphor-react-native";

import api from "../services/api"

interface RouteParams {
  id: number,
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
  
  const { colors } = useTheme()

  const navigation = useNavigation()
  const route = useRoute();
  let { id } = route.params as RouteParams

  const [pokemon, setPokemon] = useState({} as PokemonProps)
  const [pokeId, setPokeId] = useState(id)

  useEffect(() => {
    async function getDetails() {
      try {
        const response = await api.get(`/pokemon/${pokeId}`)
        const {name, types, abilities} = response.data
        
        const typeColor = types[0].type.name;
        setPokemon({name, types, abilities, typeColor})
        console.log(pokemon.types[0].type.name)
        
      } catch(error) {
        console.log(error)
      }
    }

    getDetails()
  }, [pokeId])

  function handleLastPokemon() {
    setPokeId(pokeId-1)
  }

  function handleNextPokemon() {
    setPokeId(pokeId+1)
  }

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
        onPress={handleLastPokemon}
        icon={<CaretLeft size={32} color="black"/>}
        />
        <Heading textTransform="capitalize" fontSize={24}>{pokemon.name}</Heading>
        <IconButton
        w="24px"
        h="24px"
        onPress={handleNextPokemon}
        icon={<CaretRight size={32} color="black"/>}
        />
      </HStack>

      <VStack
      h="350"
      justifyContent="center"
      alignItems="center"
      >
        <Image w="300" h="300" opacity={0.25}  source={require('../assets/pokeball_white.png')} alt={'pokeball'}/>
        <Image position='absolute' zIndex={1} source={{uri : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`}} alt="Alternate Text" size="2xl"/>
      </VStack>

      <VStack
      rounded="3xl"
      bg="white"
      h="400px"
      pt={5}
      >
        <Box rounded="lg" mr={1} bg='normal'>
          <Text px={1}>TESTANDO</Text>
        </Box>
      </VStack>

    </VStack>
  )
}