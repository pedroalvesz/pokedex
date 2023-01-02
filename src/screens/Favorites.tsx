import { useContext } from 'react'
import { Alert as DefaultAlert } from 'react-native'
import { VStack, Center, Image, FlatList} from 'native-base'


import { FavoriteCard } from '../Components/FavoriteCard'
import { LoadingPokeball } from '../Components/LoadingPokeball'
import { AppContext } from '../contexts/AppContext'
import { ListEmpty } from '../Components/ListEmpty'

export function Favorites() {

  const { FavPokemons, updateFavPokemons, loadingUserFavorite } = useContext(AppContext)
  return(
    <VStack
    flex={1}
    pt="45px"
    px={6}
    bg="white"
    >
      <Image w="250" h="250" opacity={0.05} position='absolute' top='30%' right='20%' source={require('../assets/pokeball_gray.png')} alt='pokeball'/>
      <Center pb={5}>
      <Image w="200px" h="75px" source={require('../assets/logo.png')} alt="Pokedex Logo"/>
      </Center>
      <VStack flex={1} pt={10} alignItems='center'>
      {
        loadingUserFavorite
        ?
        <LoadingPokeball/>
        :
        <FlatList
        data={FavPokemons}
        keyExtractor={(item) => item.toString()}
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
        numColumns={2}
        ListEmptyComponent={<ListEmpty/>}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 92}}
        />
      }
      </VStack>
    </VStack>
  )
}