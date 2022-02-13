import { useContext, useEffect } from 'react'
import { fetchPokemon } from '../services/fetchApi'
import { Context } from '../context/PkContext'

export default function usePokemon (id = null) {
  const { pokemon, setPokemon } = useContext(Context)
  const pokemonId = id || Math.floor(Math.random() * 100)

  useEffect(
    () => {
      fetchPokemon(pokemonId).then(
        data => {
          setPokemon(data)
        }
      )
    }, []
  )

  return pokemon
}
