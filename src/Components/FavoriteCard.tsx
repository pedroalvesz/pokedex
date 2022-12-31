import { Center, Image } from 'native-base'

type FavoriteCardProps = {
  pokemon: number;
}

export function FavoriteCard({pokemon} : FavoriteCardProps) {


  return(
    <Center>
    <Image
    source={{uri : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon}.png`}}
    size={32}
    alt='Pokemon Image'
    position='absolute'
    zIndex={1}
    />
    <Image
    source={require('../assets/pokeball.png')}
    size={40}
    alt='Pokeball Image'
    />
    </Center>
  )
}