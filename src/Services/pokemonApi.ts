import { PokeData } from '../Types/pokemon';
import api from './api';

interface PokeapiResponsedata {
  count: number;
  results: PokeData[];
}

export async function loadPokemons(offset: number, limit: number) {
  const { data } = await api.get<PokeapiResponsedata>(
    `pokemon?offset=${offset}&limit=${limit}`
  );
  return data;
}