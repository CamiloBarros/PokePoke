import Card from './components/Card'
import Nav from './components/Nav'
import usePokemon from './hooks/usePokemon'

function App () {
  const pokemon = usePokemon()

  if (pokemon.data === undefined) {
    return null
  }

  const { name, stats, weight } = pokemon.data

  return (
    <main className='font-mono w-screen h-screen bg-gradient-to-l from-sky-400'>
      <Nav />
      <Card name={name} stats={stats} weight={weight} pokemon={pokemon} />
    </main>
  )
}

export default App
