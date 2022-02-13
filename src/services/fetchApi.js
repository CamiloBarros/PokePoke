import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/'

export const fetchAllPokemons = () => {
  axios.get(baseUrl + 'pokemon?limit=1118').then(
    response => {
      console.log(response.data)
    }
  )
}

export const fetchPokemon = async (id) => {
  const { data } = await axios.get(baseUrl + `pokemon/${id}`)

  return {
    sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`,
    data: data
  }
}
