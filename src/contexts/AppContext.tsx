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


  function updateFavPokemons(id: number) {
    if(FavPokemons.find(number => number === id)) {
      setFavPokemons(FavPokemons.filter(number => number !== id))
      return;
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