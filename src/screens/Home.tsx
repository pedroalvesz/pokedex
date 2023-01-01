import React, { useEffect, useState } from "react";
import { FlatList, HStack, Text, VStack } from 'native-base'

import axios from "axios";

import { Header } from "../Components/Header";
import { LoadingPokeball } from "../Components/LoadingPokeball";
import { SearchBar } from "../Components/SearchBar";
import { Card } from "../Components/Card";

import { PokeDTO } from "../dtos/PokeDto";



export function Home() {

  const [pokemons, setPokemons] = useState<PokeDTO[]>([]);
  const [Loading, setLoading] = useState(Boolean)

  useEffect(() => {
    fetchPokemon()
  }, [])


  async function fetchPokemon() {
    try {
      setLoading(true)
      const urls = []
      for(let i = 1; i <= 151; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`
        urls.push(url)
      }

      const response = await axios.all(urls.map((url) => axios.get(url)))
      setPokemons(response)
      
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  function filterPokemon(name) {
    if (name.trim() === "") {
      fetchPokemon()
    }
    const filteredPokemon = pokemons.map(pokemon => ({...pokemon})).filter(pokemon => pokemon.data.name.includes(name.toLowerCase()))

    setPokemons(filteredPokemon)
  }

  
  return(
    <VStack
    flex={1}
    pt="45px"
    px={6}
    bg="white"
    >
      <Header/>
      <SearchBar filterPokemon={filterPokemon}/>
      {Loading
      ?
      <LoadingPokeball/>
      :
      <VStack>
        <HStack
        width="100%"
        justifyContent="flex-end"
        pt={6}
        pb={3}
        >
        <HStack>
          <Text
          fontSize={16}
          fontWeight="bold"
          >
            {pokemons.length} pokémon
          </Text>
          <Text
          fontSize={16}
          fontWeight="medium"
          > registered.
          </Text>
        </HStack>
        </HStack>

        <FlatList
        data={pokemons}
        keyExtractor={(item) => item.data.name}
        renderItem={({item}) =>
        <Card data={item.data} image={item.data.sprites.front_default} types={item.data.types}/>
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{borderRadius: 40, paddingBottom:80}}
        />
      </VStack>
      }
    </VStack>
  )
}