import axios from "axios";

const baseUrl = 'https://pokeapi.co/api/v2/'

const api = axios.create({
  baseURL: baseUrl
})

export default api


// o axios é utilizado para as chamadas url
// este é o arquivo que cria a api para as chamadas da api 
// da pokedex
