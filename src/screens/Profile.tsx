import { useNavigation } from "@react-navigation/native";
import { HStack, IconButton, Image, VStack } from "native-base";
import { CaretLeft } from "phosphor-react-native";
import { PokeData } from "../Components/Card";

import { SearchBar } from "../Components/SearchBar";



interface Props {
 data: PokeData
}

export function Profile({ data } : Props) {

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
    console.log(data)
  }
  
  return(
    <VStack
    flex={1}
    bg="gray.800"
    >
      <HStack
      w="100%"
      mt="70px"
      px={6}
      alignItems="center"
      justifyContent="space-between"
      >
        <IconButton
        w="24px"
        h="24px"
        onPress={handleGoBack}
        icon={<CaretLeft size={32} color="black"/>}
        />
        <VStack
        w="80%"
        >
          <SearchBar/>
        </VStack>
      </HStack>
      <VStack
      h="350"
      justifyContent="center"
      alignItems="center"
      >
        <Image w="250" h="250" source={require('../assets/pokeball_white.png')} alt={'pokeball'}/>
      </VStack>
      <VStack
      rounded="3xl"
      bg="white"
      h="400px"
      >
      </VStack>
    </VStack>
  )
}