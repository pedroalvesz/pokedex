import React, { useEffect, useState } from "react";
import { FlatList, HStack, Text, VStack } from 'native-base'
import { Card } from "../Components/Card";

import api from "../services/api";

import { CarDTO } from "../dtos/CarDto";

export function Home() {

  const [pokemons, setPokemons] = useState<CarDTO[]>([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await api.get('/pokemon?limit=2000&offset=0')
        setPokemons(response.data.results)
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchPokemon()

  }, [])

  return(
    <VStack
    flex={1}
    pt="130"
    px={6}
    bg="#3B4CCA"
    >
      <HStack
      width="100%"
      justifyContent="flex-end"
      pb={4}
      >
      <Text
      color="white"
      fontSize={16}
      fontWeight="bold"
      >
        {pokemons.length} pokémon
      </Text>
      <Text
      color="white"
      fontSize={16}
      fontWeight="medium"
      > registered.
      </Text>
      </HStack>
      <FlatList
      data={pokemons}
      keyExtractor={(item) =>item.name}
      renderItem={({item}) =>
      <Card data={item}/>
    }
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{borderRadius: 40, paddingBottom:60}} 
      />
      
    </VStack>
  )
}