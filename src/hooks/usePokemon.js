import { useEffect, useState } from 'react'
import { fetchPokemon } from '../services/fetchApi'

export default function usePokemon ({ key, initialValue = '', id = null }) {
  const [pokemon, setPokemon] = useState(() => {
    try {
      /* Obtener el valor del localstorage o agregar el initialValue */
      const infoPokemon = window.sessionStorage.getItem(key)
      return JSON.parse(infoPokemon) || initialValue
    } catch (err) {
      console.error(err)
    }
  })

  const pokemonId = id || Math.floor(Math.random() * 100)
  useEffect(
    () => {
      if (pokemon === '') {
        fetchPokemon(pokemonId)
          .then(
            data => {
              setPokemon(data)
            }
          )
      }
    }, []
  )

  window.sessionStorage.setItem(key, JSON.stringify(pokemon))
  return [pokemon, setPokemon]
}
