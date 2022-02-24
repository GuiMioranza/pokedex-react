import { PokeData } from "../../Types/pokemon";
import { Container } from './styles'


interface PokemonProps{
  pokemon: PokeData
}

const baseImgUrl = 
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

function getPokemonId(url: string): string {
  return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
}

export default function Pokemon({ pokemon } : PokemonProps) {
  const id = getPokemonId(pokemon.url);
  
  
  return(
    <Container to={`/details/${id}`}>

      <img src={`${baseImgUrl}${id}.png`} alt="" width={200} height={200} />
      <span>{pokemon.name}</span>

    </Container>
      

  ) 
}