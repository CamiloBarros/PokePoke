import Card from './components/Card'
import Nav from './components/Nav'
import PkProvider from './context/PkContext'

function App () {
  return (
    <main className='font-mono w-screen h-screen bg-slate-700 p-5 sm:p-0 overflow-auto'>
      <PkProvider>
        <Nav />
        <div className='lg:grid lg:grid-cols-2'>
          <div className='text-center mt-10'>
            <h1 className='text-white text-6xl lg:text-8xl xl:text-9xl'>Poke<span className='text-red-500'>Poke</span></h1>
            <p className='text-white p-4'>PokePoke is a frontend application that connects to a free API called PokeApi, and facilitates the visualization and search of pokemon through a minimalist interface. This application was developed with the aim of putting into practice React concepts such as the use of Hooks, Custom Hooks, Context and Routes. In addition, the use of new technologies: Tailwinds as CSS Framework and Vite as a file packer, an alternative to WebPack.</p>
          </div>
          <div className=''>
            <Card />
          </div>
        </div>
      </PkProvider>
    </main>
  )
}

export default App
