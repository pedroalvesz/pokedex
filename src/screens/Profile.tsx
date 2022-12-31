import {useContext, useEffect, useState} from "react";
import { TouchableOpacity } from 'react-native'
import { Heading, HStack, IconButton, Image, VStack, Box, Text, View, Divider, useToast, useTheme} from "native-base";
import { useRoute } from "@react-navigation/native";
import { CaretLeft, CaretRight, Ruler,  Package } from "phosphor-react-native";

import BookMarkSvg from '../assets/bookmark.svg'
import BookMarkSlashSvg from '../assets/bookmark-slash.svg'

import api from "../services/api"
import { detailsDTO } from "../dtos/detailsDTO";
import { AppContext } from "../contexts/AppContext";



type RouteParams = {
  id: number,
}


export function Profile() {
  
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const {updateFavPokemons, FavPokemons} = useContext(AppContext);
  
  const toast = useToast();
  const { colors } = useTheme();

  const [pokemon, setPokemon] = useState<detailsDTO>({} as detailsDTO);
  const [pokeId, setPokeId] = useState(id);
  const [Loading, isLoading] = useState(true);

  // usar contexto para atualizar o id direto, por isso ta bugando

  // ter que usar o useeffect do navigation
  useEffect(() => {
    getDetails(pokeId)
  }, []);

  useEffect(() => {
    getDetails(pokeId)
  }, [pokeId]);

  async function getDetails(id: number) {
    try {
      const res = await api.get(`/pokemon/${id}`)
      const desc = await api.get(`/pokemon-species/${id}`)

      const { name, types, abilities, weight, height } = res.data
      const { flavor_text_entries } = desc.data
      setPokemon({name, types, abilities, flavor_text_entries, weight, height})

    } catch (error) {
      console.log(error)
    } finally {
      isLoading(false)
    }
  }

  function handleLastPokemon() {
    if(pokeId === 1) {
      return toast.show({
        title: 'There is no pokemon before Bulbasaur.',
        placement: 'top',
        bg: 'red.400'
      })
    }
    setPokeId(pokeId -1)
  }

  function handleNextPokemon() {
    setPokeId(pokeId +1)
  }

  function handleFavorite(id: number) {
    updateFavPokemons(id)
  }

  return(
    <>
      {Loading
      ? 
      <Text>CARREGADO</Text>
      :
      <VStack
        flex={1}
        bg={pokemon.types[0].type.name}
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

            <HStack alignItems='center'>
              <Heading textTransform="capitalize" fontSize={24} color='white' mr={2}>
                #{pokeId}
              </Heading>

              <TouchableOpacity onPress={() => handleFavorite(pokeId)}>
                {FavPokemons.includes(pokeId) 
                ?
                <BookMarkSlashSvg fill='white' width={32} height={28}/>
                :
                <BookMarkSvg fill='white' width={32} height={28}/>
                }
              </TouchableOpacity>
            </HStack>

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
            <HStack
            pt={16}
            rounded="lg"
            justifyContent='center'
            space={4}>
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
            


            <Heading fontSize={24} textTransform='capitalize' color={pokemon.types[0].type.name} py={1} px={2} my={2}>About</Heading>



            <HStack alignItems='center' mb={2} width='full' justifyContent="space-around">

              <VStack alignItems='center' py={2}>
                <HStack justifyContent='center' alignItems='center'>
                  <Package size={24}/>
                  <Text ml={1}>{pokemon.weight / 10}kg</Text>
                </HStack>
                <Text fontSize='xs' color='#666666' pt={2}>Weight</Text>
              </VStack>

              <Divider mx={6} orientation="vertical"/>

              <VStack alignItems='center' py={2}>
                <HStack>
                  <Ruler size={24}/>
                  <Text ml={1}>{pokemon.height / 10}m</Text>
                </HStack>
                <Text fontSize='xs' color='#666666' pt={2}>Height</Text>
              </VStack>

              <Divider mx={6} orientation="vertical"/>

              <VStack alignItems='center' py={2}>
                {pokemon.abilities[1]
                ?
                <>
                <Text textTransform='capitalize' mb={1}>{pokemon.abilities[0].ability.name}</Text>
                <Text textTransform='capitalize'>{pokemon.abilities[1].ability.name}</Text>
                </>
                :
                <Text textTransform='capitalize'>{pokemon.abilities[0].ability.name}</Text>
                }
                <Text fontSize='xs' color='#666666' pt={2}>Abilities</Text>
              </VStack>

            </HStack>

            <Text textAlign='center'>{pokemon.flavor_text_entries[15].flavor_text.replace(/(\r\n|\n|\r|\t)/gm," ")}</Text>

            <HStack position='absolute' bottom={24}>
              
            </HStack>
          </VStack>

        </VStack>
      }
    </>
  )
}