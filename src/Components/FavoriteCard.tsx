import { Image } from 'native-base'

export function FavoriteCard() {
  return(
    <Image
    source={require('../assets/pokeball.png')}
    size={40}
    alt='Pokeball Image'
    />
  )
}