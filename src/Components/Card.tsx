import React from "react";
import { Heading, HStack, Text, VStack,} from 'native-base'


interface PokeData {
  name: string;
  id: string
}

interface Props{
  data: PokeData
}

export function Card({data} : Props) {

  return(
    <HStack
    w="100%"
    h="130px"
    bg="white"
    rounded="md"
    p={6}
    >
      <VStack
      justifyContent="center"
      >
      <Heading textTransform="capitalize" fontSize={16}>{data.name}</Heading>
      <HStack>
        <Text>{data.id}</Text>
        <Text>type2</Text>
      </HStack>
      </VStack>
      

    </HStack>
  )
}