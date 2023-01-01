import { useContext } from 'react'
import { Alert as DefaultAlert } from 'react-native'
import { VStack, Center, Image, FlatList, Text, Alert, HStack, Box } from 'native-base'
import { FavoriteCard } from '../Components/FavoriteCard'
import { AppContext } from '../contexts/AppContext'

export function Favorites() {

  const { FavPokemons, updateFavPokemons } = useContext(AppContext)
  return(
    <VStack
    flex={1}
    pt="45px"
    px={6}
    bg="white"
    >
      <Center pb={5}>
      <Image w="200px" h="75px" source={require('../assets/logo.png')} alt="Pokedex Logo"/>
      </Center>
      <VStack flex={1} pt={10} alignItems='center'>
        <FlatList
        data={FavPokemons}
        numColumns={2}
        renderItem={({item}) => <FavoriteCard pokemon={item} onLongPress={() => DefaultAlert.alert(
          "Remove this Pokémon from favorites?",
          "",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => updateFavPokemons(item)
        }
      ]
        )}/>}
        ListEmptyComponent={
          <Alert maxW="400" status="info" colorScheme="info" mt={40}>
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
              <HStack flexShrink={1} space={2} alignItems="center">
                <Alert.Icon />
                <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                  You have no favorited pokemon.
                </Text>
              </HStack>
            </HStack>
            <Box pl="6" _text={{
            color: "coolGray.600"
          }}>
              You should get some on home screen !
            </Box>
          </VStack>
        </Alert>
        }
        />
      </VStack>
    </VStack>
  )
}