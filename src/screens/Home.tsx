import React, { useEffect, useState } from "react";
import { FlatList, HStack, Text, VStack } from 'native-base'
import { Card } from "../Components/Card";

import api from "../services/api";

import { PokeDTO } from "../dtos/PokeDto";
import axios from "axios";

export function Home() {

  const [pokemons, setPokemons] = useState<PokeDTO[]>([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const urls = []
        for(let i = 1; i < 100; i++) {
          const url = `https://pokeapi.co/api/v2/pokemon/${i}`
          urls.push(url)
        }

        const response = await axios.all(urls.map((url) => axios.get(url)))
        setPokemons(response)
        //const response = await api.get('/pokemon?limit=2000&offset=0')
        //setPokemons(response.data.results)
        
      } catch (error) {
        console.log(error)
      }
    }
    fetchPokemon()

  }, [])
  //parar de puxar todos em lista direto
  //puxar cada um pelo numero com o loop for
  // e depois passar todos para o estado

  return(
    <VStack
    flex={1}
    pt="50"
    px={6}
    bg="#3B4CCA"
    >
      <Text textAlign="center" color="white" pb="80px">Developed by pedroalvesz 👋</Text>
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
      keyExtractor={(item) =>item.data.name}
      renderItem={({item}) =>
      <Card data={item.data} image={item.data.sprites.front_default} types={item.data.types}/>
    }
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{borderRadius: 40, paddingBottom:60}} 
      />
      
    </VStack>
  )
}