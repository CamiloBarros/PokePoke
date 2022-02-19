import { useState } from 'react'
import { fetchPokemon } from '../services/fetchApi'

export default function useSearch ({ setPokemon }) {
  const [search, setSearch] = useState('')

  const handleInput = (event) => {
    const { value } = event.target
    setSearch(value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      if (search.trim() !== '') {
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
