import {useEffect, useState} from "react";
import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import { Heading, HStack, IconButton, Image, VStack, Box, Text, View } from "native-base";
import { CaretLeft, CaretRight } from "phosphor-react-native";

import api from "../services/api"
import { PokeDTO } from "../dtos/PokeDto";

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
  flavor_text_entries: {
    15: {
      flavor_text: string;
    }
  };
}

export function Profile() {
  
  // pegar descrição daqui https://pokeapi.co/api/v2/pokemon-species/25/

  const route = useRoute();
  const { id } = route.params as RouteParams

  const [pokemon, setPokemon] = useState<PokemonProps>({} as PokemonProps)
  const [pokeId, setPokeId] = useState(id)
  const [Loading, isLoading] = useState(true)

  useEffect(() => {
    getDetails(pokeId)
  }, [])

  useEffect(() => {
    getDetails(pokeId)
  }, [pokeId])

  async function getDetails(id: number) {
    try {
      const res = await api.get(`/pokemon/${id}`)
      const desc = await api.get(`/pokemon-species/${id}`)

      const { name, types, abilities } = res.data
      const { flavor_text_entries } = desc.data
      console.log(flavor_text_entries)
      setPokemon({name, types, abilities, flavor_text_entries})
      isLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  function handleLastPokemon() {
    setPokeId(pokeId -1)
  }

  function handleNextPokemon() {
    setPokeId(pokeId +1)
  }


  return(
    <>
      {Loading
      ? 
      <Text>CARREGADO</Text>
      :
      <VStack
        flex={1}
        bg={pokemon.types[0].type.name }
        >
          <Image w="225" h="225" opacity={0.15} position='absolute' top={12} right={4} source={require('../assets/pokeball_white.png')} alt={'pokeball'}/>
          <HStack
          w="100%"
          mt="70px"
          px={6}
          alignItems="center"
          justifyContent="space-between"
          >
            <Heading textTransform="capitalize" fontSize={32} color='white'>
              {pokemon.name}
            </Heading>
            <Heading textTransform="capitalize" fontSize={32} color='white'>
              #{pokeId}
            </Heading>
          </HStack>

          <HStack
          h="220"
          justifyContent="space-between"
          alignItems="center"
          px={6}
          >
            <IconButton
            w="24px"
            h="24px"
            onPress={handleLastPokemon}
            icon={<CaretLeft size={32} color="white"/>}
            />
            <View justifyContent='center' alignItems='center'>
            <Image position='absolute' top={-75} source={{uri : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`}} alt="Alternate Text" size="2xl"/>
            </View>
            <IconButton
            w="24px"
            h="24px"
            onPress={handleNextPokemon}
            icon={<CaretRight size={32} color="white"/>}
            />
          </HStack>

          <VStack
          bg="white"
          flex={1}
          zIndex={-1}
          alignItems='center'
          rounded="3xl"
          pt={5}
          px={6}
          mx={2}
          mb={4}
          >
            <HStack pt={16} rounded="lg" justifyContent='center' space={4}>
              {
              pokemon.types[1]
              ?
              <>
              <Box rounded="lg" bg={pokemon.types[0].type.name}>
                <Heading fontSize={18} textTransform='capitalize' color='white' py={1} px={2}>{pokemon.types[0].type.name}</Heading>
              </Box>
              <Box rounded="lg" bg={pokemon.types[1].type.name}>
                <Heading fontSize={18} textTransform='capitalize' color='white' py={1} px={2}>{pokemon.types[1].type.name}</Heading>
              </Box>
              </>
              :
              <Box rounded="lg" bg={pokemon.types[0].type.name}>
                <Heading fontSize={18} textTransform='capitalize' color='white' py={1} px={2}>{pokemon.types[0].type.name}</Heading>
              </Box>
              }
            </HStack>

            <Heading fontSize={24} textTransform='capitalize' color={pokemon.types[0].type.name} py={1} px={2} my={4}>About</Heading>
            <Text>{pokemon.flavor_text_entries[15].flavor_text.replace(/(\r\n|\n|\r|\t)/gm,"")}</Text>
          </VStack>

        </VStack>
      }
    </>
  )
}