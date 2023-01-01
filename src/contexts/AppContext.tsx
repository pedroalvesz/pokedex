import { createContext, ReactNode, useEffect, useState } from 'react'
import { storageFavoriteGet, storageFavoriteRemove, storageFavoriteSave } from '../storage/StorageFavorite';

type AppContextDataProps = {
  updateFavPokemons: (id: number) => void;
  FavPokemons: number[];
  loadingUserFavorite: boolean;
}

type ProviderProps = {
  children: ReactNode;
}

export const AppContext = createContext<AppContextDataProps>({} as AppContextDataProps)


export function AppContextProvider({children} : ProviderProps) {

  const [FavPokemons, setFavPokemons] = useState([])
  const [loadingUserFavorite, setLoadingUserFavorite] = useState(true)


  async function updateFavPokemons(id: number) {
    try {
      if(FavPokemons.find(number => number === id)) {

        const updatedPokemon = FavPokemons.filter(number => number !== id)
        await storageFavoriteRemove()
        await storageFavoriteSave(updatedPokemon)

        setFavPokemons(updatedPokemon)
        return;
      }
      
      const updatedPokemon = [...FavPokemons, id]
      await storageFavoriteSave(updatedPokemon)
      setFavPokemons(updatedPokemon)
    } catch (error) {
      throw error
    }
  }

  async function loadUserFavorite() {
    try {
      const list = await storageFavoriteGet()

      if(list) {
        setFavPokemons(list)
      }
    } catch (error) {
      throw error
    } finally {
      setLoadingUserFavorite(false)
    }
  }

  useEffect(() => {
    loadUserFavorite()
  }, [])

  return(
    <AppContext.Provider value={{updateFavPokemons, FavPokemons, loadingUserFavorite}}>
      {children}
    </AppContext.Provider>
  )
}