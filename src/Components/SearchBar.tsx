import React from "react";
import { VStack, Input, Icon } from "native-base";
import { Ionicons} from "@expo/vector-icons";

interface SearchBarProps {
  filterPokemon: (name: string) => void;
}

export function SearchBar({filterPokemon} : SearchBarProps) {
  return(
    <VStack w="100%" space={5} alignSelf="center">
    <Input 
    placeholder="Search"
    variant="filled"
    width="100%"
    height={8}
    borderRadius="10" 
    py="1" 
    px="2" 
    InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />}
    onChangeText={name => filterPokemon(name)}
    />
  </VStack>
  )
}