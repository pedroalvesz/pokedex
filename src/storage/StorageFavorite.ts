import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_STORAGE } from "./StorageConfig";

export async function storageFavoriteSave(list : number[]) {
  await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(list))
}

export async function storageFavoriteGet() {
  const storage = await AsyncStorage.getItem(FAVORITE_STORAGE)

  const list = storage ? JSON.parse(storage) : []
  return list;
}

export async function storageFavoriteRemove() {
  await AsyncStorage.removeItem(FAVORITE_STORAGE)
}