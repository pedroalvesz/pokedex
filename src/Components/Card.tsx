import React, {useState, useEffect} from "react";
import { Heading, HStack, Image, Text, VStack, Circle} from 'native-base'
import api from "../services/api";


interface PokeData {
  name: string;
  id: string;
  url: string;
}

interface Props{
  data: PokeData
}

export function Card({data} : Props) {

    
    const pokemonNumber = data.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')
    const SpriteImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonNumber}.gif`

  return(
    <HStack
    w="100%"
    h="130px"
    bg="white"
    rounded="md"
    p={6}
    mb={6}
    >
      <HStack
      flex={1}
      justifyContent="space-between"
      alignItems="center"
      >
      
      <VStack>
        <Heading textTransform="capitalize" fontSize={16}>{data.name}</Heading>
        <Text>{data.id}</Text>
        <Text>type2</Text>
  
      </VStack>
        <Circle bg="gray.500" w={24} h={24}>
        <Image source={{uri : SpriteImage}} alt="Alternate Text" size="sm"/>
        </Circle>
      </HStack>
      

    </HStack>
  )
}