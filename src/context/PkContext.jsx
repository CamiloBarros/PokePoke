import React, { useState } from 'react'

export const Context = React.createContext()
const { Provider } = Context

const PkProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState({})

  return (
    <Provider value={{
      pokemon,
      setPokemon
    }}
    >
      {children}
    </Provider>
  )
}

export default PkProvider
