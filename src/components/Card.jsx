import React from 'react'
import usePokemon from '../hooks/usePokemon'

const Card = () => {
  const pokemon = usePokemon()

  if (pokemon.data === undefined) {
    return null
  }
  const { name, stats, weight } = pokemon.data

  return (
    <>
      <div className='border border-gray-200 rounded-md text-center p-4 shadow-sm mt-5 sm:my-10 mx-auto max-w-md bg-white'>

        <div className=' text-sky-900'>
          <div className=''>
            <img
              src={pokemon.sprite}
              alt={`Imagen: ${name}`}
              className='rounded-full h-72 w-72 border shadow-sm mb-8 mx-auto'
            />
          </div>
          <h1 className='font-semibold text-white bg-red-500 rounded-full py-1 my-2 w-4/5 mx-auto'>
            {' '}
            {name.toUpperCase()}{' '}
          </h1>

          <section className='border border-sky-900 p-2'>
            <ul className='grid grid-rows-6'>
              <h1 className='font-bold text-center'>~ Caracteristicas ~</h1>
              {stats.map((object) => {
                return (
                  <li key={object.stat.name} className='grid grid-cols-2'>
                    <span className='font-semibold'>
                      {object.stat.name.toUpperCase()}
                    </span>
                    <span className='text-red-500'>{object.base_stat}</span>
                  </li>
                )
              })}
            </ul>
          </section>

          <footer className='flex justify-end'>
            <span className='text-gray-200 text-sm'>WEIGHT:{weight}</span>
          </footer>
        </div>
      </div>
    </>
  )
}

export default Card
