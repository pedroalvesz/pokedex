import { TouchableOpacity, TouchableOpacityProps} from 'react-native'
import { Box, Image } from 'native-base'


type FavoriteCardProps = TouchableOpacityProps & {
  pokemon: number;
}

export function FavoriteCard({pokemon, ...rest} : FavoriteCardProps) {

  return(
    <TouchableOpacity {...rest}>
      <Box
      bg='gray.200'
      width='150px'
      height='150px'
      justifyContent='center'
      alignItems='center'
      rounded='xl'
      m={2}
      shadow={5}
      >
        <Image
        source={{uri : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon}.png`}}
        size={32}
        alt='Pokemon Image'
        position='absolute'
        zIndex={1}
        />
      </Box>
    </TouchableOpacity>
  )
}