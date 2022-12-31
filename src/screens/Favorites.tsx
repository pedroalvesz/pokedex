import {VStack, Center, Image, Text, Heading, HStack, FlatList} from 'native-base'
import { useState } from 'react'
import { FavoriteCard } from '../Components/FavoriteCard'

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
      <VStack flex={1} pt={10} alignItems='center'>
        <FavoriteCard/>
      </VStack>
    </VStack>
  )
}