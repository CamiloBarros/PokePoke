import { useContext, useState } from 'react'
import { Context } from '../context/PkContext'
import { fetchPokemon } from '../services/fetchApi'

/**
 * todo: Utilizar un estado global para los datos del pokemon
 */

export default function useSearch () {
  const [search, setSearch] = useState('')
  const { setPokemon } = useContext(Context)

  const handleInput = (event) => {
    const { value } = event.target
    setSearch(value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (search.match(/^[1-9]+$/)) {
      fetchPokemon(search.toLowerCase())
        .then(
          data => {
            setPokemon(data)
          }
        )
        .catch(() => console.log('Pokemon no encontrado...'))
        .finally(
          setSearch('')
        )
      }
    }
  }

  return {
    handleInput,
    handleKeyPress,
    search
  }
}
