import React from "react";
import { Heading, HStack, Image, Text, VStack, Circle} from 'native-base'


interface PokeData {
  name: string;
  id: string;
  url: string;
}

interface Props{
  data: PokeData;
  image: string;
  types: {
  }
}

export function Card({data, image, types} : Props) {

  function typeChecker() {
    if(types[1]) {
      return types[0].type.name + "   " + types[1].type.name
    }
    return types[0].type.name
  }
    //const pokemonNumber = data.url.replace('https://pokeapi.co/api/v2/pokemon/','').replace('/','')
    //const SpriteImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonNumber}.gif`

  return(
    <HStack
    w="100%"
    h="130px"
    bg="white"
    rounded="md"
    p={6}
    mb={3}
    >
      <HStack
      flex={1}
      justifyContent="space-between"
      alignItems="center"
      >
      
      <VStack>
        <Heading textTransform="capitalize" fontSize={16}>{data.name}</Heading>
        <HStack
        >
          <Text pr={2}>{typeChecker()}</Text>
          <Text></Text>
        </HStack>
      </VStack>
        <Circle w={24} h={24}>
        <Image position='absolute' zIndex={0} source={{uri : "https://www.nicepng.com/png/full/15-158271_pokeball-icon.png"}} alt="Alternate Text" size="100%"/>
        <Image position='absolute' zIndex={1}source={{uri : image}} alt="Alternate Text" size="lg"/>
        </Circle>
      </HStack>
      

    </HStack>
  )
}