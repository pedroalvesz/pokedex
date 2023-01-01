import { TouchableOpacity, TouchableOpacityProps} from 'react-native'
import { Box, Image, Spinner } from 'native-base'
import { useEffect, useState } from 'react';
import api from '../services/api';

type FavoriteCardProps = TouchableOpacityProps & {
  pokemon: number;
}

export function FavoriteCard({pokemon, ...rest} : FavoriteCardProps) {

  const [isLoading, setIsLoading] = useState(true)
  const [typeColor, setTypeColor] = useState('') 
  
  async function getType() {
    try {
      const response = await api.get(`/pokemon/${pokemon}`)
      const { types } = response.data

      const typeColor = types[0].type.name

      setTypeColor(typeColor)

    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getType()
  }, [])

  if(isLoading) {
    return <Spinner/>
  }

  return(
    <TouchableOpacity {...rest}>
      <Box
      bg={typeColor}
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