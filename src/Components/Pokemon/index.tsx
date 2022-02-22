import { PokeData } from "../../Types/pokemon";
import { Container } from './styles'


interface PokemonProps{
  pokemon: PokeData
}

const baseImgUrl = 
  'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/'

function getPokemonId(url: string): string {
  return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
}

export default function Pokemon({ pokemon } : PokemonProps) {
  const id = getPokemonId(pokemon.url);
  
  
  return(
    <Container>

      <img src={`${baseImgUrl}${id}.svg`} alt="" width={200} height={150} />
      <span>{pokemon.name}</span>

    </Container>
      

  ) 
}