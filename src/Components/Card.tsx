import React from "react";
import { Heading, HStack, Image, Text, VStack, Circle, useTheme, Box, Pressable} from 'native-base'
import { useNavigation } from "@react-navigation/native";

import { TabRoutesNavigationProps } from "../routes/tab.routes";

type PokeData = {
  name: string;
  id: number;
  url: string;
}

type Props = {
  data: PokeData;
  image: string;
  types: {
  }
}

export function Card({data, image, types} : Props) {
  const {colors} = useTheme()

  const { navigate } = useNavigation<TabRoutesNavigationProps>()

  function showPokemonDetails(id : number) {
    navigate('profile', {
      id,
    })
  }
  
  return(
    <Pressable
    onPress={() => showPokemonDetails(data.id)}
    >
      <HStack
        w="100%"
        h="120px"
        bg={colors.light[types[0].type.name]}
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
            <Heading pb={0.5} textTransform="capitalize" fontSize={16}>{data.name}</Heading>
            <HStack
            >
              {types[1] 
              ?
              <>
              <Box rounded="lg" mr={1} bg={colors[types[0].type.name]}>
                <Text textTransform='capitalize' px={1}>{types[0].type.name}</Text>
              </Box>
              <Box rounded="lg" bg={colors[types[1].type.name]}>
                <Text textTransform='capitalize' px={1}>{types[1].type.name}</Text>
              </Box>
              </>
              :
              <Box rounded="lg" bg={colors[types[0].type.name]}>
                <Text textTransform='capitalize' px={1}>{types[0].type.name}</Text>
              </Box>
            }
              
            </HStack>
            
          </VStack> 
          <Circle w={24} h={24}>
          <Image position='absolute' zIndex={1} source={{uri : image}} alt="Alternate Text" size="xl"/>
          </Circle>
        </HStack>
        

      </HStack>
    </Pressable>
  )
}