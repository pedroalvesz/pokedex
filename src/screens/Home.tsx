import React, { useEffect, useState } from "react";
import { Center, FlatList, Heading, HStack, Image, Text, VStack } from 'native-base'
import { Card } from "../Components/Card";
import axios from "axios";

import { PokeDTO } from "../dtos/PokeDto";
import { SearchBar } from "../Components/SearchBar";

export function Home() {

  const [pokemons, setPokemons] = useState<PokeDTO[]>([]);

  useEffect(() => {
    fetchPokemon()
  }, [])


  async function fetchPokemon() {
    try {
      const urls = []
      for(let i = 1; i < 21; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        urls.push(url)
      }

      const response = await axios.all(urls.map((url) => axios.get(url)))
      setPokemons(response)
      
    } catch (error) {
      console.log(error)
    }
  }


  function filterPokemon(name) {
    if (name === "") {
      fetchPokemon()
    }
    const filteredPokemon = pokemons.map(pokemon => ({...pokemon})).filter(pokemon => pokemon.data.name.includes(name))

    setPokemons(filteredPokemon)
  }

  return(
    <VStack
    flex={1}
    pt="20px"
    px={6}
    bg="#3B4CCA"
    >
      <Center pb={5}>
      <Image source={require('../assets/logo.png') } w="200px" h="65px" />
      </Center>
      <SearchBar filterPokemon={filterPokemon}/>

      <HStack
      width="100%"
      justifyContent="flex-end"
      py={8}
      >
      <HStack>
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

      <Text textAlign="center" color="white" pb="30px">Developed by pedroalvesz 👋</Text>
    </VStack>
  )
}