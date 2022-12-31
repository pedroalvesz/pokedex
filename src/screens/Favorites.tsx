import {VStack, Center, Image, FlatList} from 'native-base'
import { useContext, useState } from 'react'
import { FavoriteCard } from '../Components/FavoriteCard'
import { AppContext } from '../contexts/AppContext'

export function Favorites() {

  const { FavPokemons } = useContext(AppContext)
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
      <VStack flex={1} pt={10} alignItems='center'>
        <FlatList
        data={FavPokemons}
        renderItem={({item}) => <FavoriteCard pokemon={item}/>}
        />
      </VStack>
    </VStack>
  )
}