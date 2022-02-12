import { useEffect, useState } from 'react'
import { fetchPokemon } from '../services/fetchApi'

export default function usePokemon () {
  const [state, setState] = useState({})
  const random = Math.floor(Math.random() * 10)

  useEffect(
    () => {
      fetchPokemon(random).then(
        data => {
          setState(data)
        }
      )
    }, []
  )

  return state
}
