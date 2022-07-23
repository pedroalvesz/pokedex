import React, { useEffect, useState } from "react";
import { FlatList, VStack } from 'native-base'
import { Card } from "../Components/Card";

import api from "../services/api";

import { CarDTO } from "../dtos/CarDto";

export function Home() {

  const [pokemon, setPokemon] = useState<CarDTO[]>([])

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await api.get('/pokemon?limit=1155&offset=0')
        setPokemon(response.data.results)
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchPokemon()
  }, [])

  return(
    <VStack
    flex={1}
    pt="150"
    p={6}
    bg="gray.600"
    >
      <FlatList
      data={pokemon}
      keyExtractor={(item) =>item.id}
      renderItem={({item}) =>
      <Card data={item}/>
    }
      />
      
    </VStack>
  )
}