import React from "react";
import { Heading, HStack, Image, Text, VStack, Circle, useTheme} from 'native-base'


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
  const {colors} = useTheme()

  //function typeChecker() {
  //  if(types[1]) {
  //    return types[0].type.name + "   " + types[1].type.name
  //  }
  //  return types[0].type.name
  //}
   
  //se existir 1 dentro do types (0 e/ou não 1) ele returna 0 e 1 - se não só 0
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
          {types[1] 
          ?
          <>
          <Text rounded="lg" px={1} mr={2} bg={colors[types[0].type.name]}>{types[0].type.name}</Text>
          <Text rounded="lg" px={1} bg={colors[types[1].type.name]}>{types[1].type.name}</Text>
          </>
          :
          <Text rounded="lg" px={1} bg={colors[types[0].type.name]}>{types[0].type.name}</Text>
         }
          
        </HStack>
        
      </VStack> 
        <Circle w={24} h={24}>
        <Image position='absolute' zIndex={0} source={require('../assets/pokeball.jpg')} alt="Alternate Text" size="100%"/>
        <Image position='absolute' zIndex={1}source={{uri : image}} alt="Alternate Text" size="lg"/>
        </Circle>
      </HStack>
      

    </HStack>
  )
}