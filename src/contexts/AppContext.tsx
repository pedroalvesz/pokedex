import { useToast } from 'native-base';
import { createContext, ReactNode, useState } from 'react'

type AppContextDataProps = {
  updateFavPokemons: (id: number) => void;
  FavPokemons: number[];
}

type ProviderProps = {
  children: ReactNode;
}

export const AppContext = createContext<AppContextDataProps>({} as AppContextDataProps)


export function AppContextProvider({children} : ProviderProps) {

  const [FavPokemons, setFavPokemons] = useState([])

  const toast = useToast()

  function updateFavPokemons(id: number) {
    if(FavPokemons.find(number => number === id)) {
      toast.show({
        title: 'You have already favorited this pokémon.',
        backgroundColor: 'yellow.500',
        placement: 'top'
      })
    }
    setFavPokemons(current => [...current, id])
  }

  console.log(FavPokemons)

  return(
    <AppContext.Provider value={{updateFavPokemons, FavPokemons}}>
      {children}
    </AppContext.Provider>
  )
}