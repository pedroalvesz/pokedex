import React, { useEffect, useState } from "react";
import { FlatList, VStack } from 'native-base'
import { Card } from "../Components/Card";

import api from "../services/api";

import { CarDTO } from "../dtos/CarDto";

export function Home() {

  const [pokemons, setPokemons] = useState<CarDTO[]>([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await api.get('/pokemon')
        setPokemons(response.data.results)
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchPokemon()

  }, [])


  console.log(pokemons[0])
  return(
    <VStack
    flex={1}
    pt="150"
    p={6}
    bg="gray.600"
    >
      <FlatList
      data={pokemons}
      keyExtractor={(item) =>item.id}
      renderItem={({item}) =>
      <Card data={item}/>
    }
      />
      
    </VStack>
  )
}