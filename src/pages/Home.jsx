import React from 'react'
import Card from '../components/Card'

const Home = () => {
  return (
    <div className='lg:grid lg:grid-cols-2'>
      <div className='text-center mt-10 lg:mt-32 lg:ml-20'>
        <h1 className='text-white text-6xl lg:text-8xl xl:text-9xl'>Poke<span className='text-red-500'>Poke</span></h1>
        <p className='text-white p-4'>PokePoke is a frontend application that connects to a free API called PokeApi, and facilitates the visualization and search of pokemon through a minimalist interface. This application was developed with the aim of putting into practice React concepts such as the use of Hooks, Custom Hooks, Context and Routes. In addition, the use of new technologies: Tailwinds as CSS Framework and Vite as a file packer, an alternative to WebPack.</p>
      </div>
      <div>
        <Card />
      </div>
    </div>
  )
}

export default Home
