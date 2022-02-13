import React from 'react'
import logo from '../favicon.svg'
import useSearch from '../hooks/useSearch'

const Nav = () => {
  const { handleInput, handleKeyPress, search } = useSearch()

  return (
    <>
      <nav className='flex justify-center flex-wrap sm:flex-nowrap content-between sm:justify-between items-center px-5 sm:py-0  sm:shadow-sm sm:h-10 bg-transparent sm:bg-gradient-to-r sm:from-white sm:via-transparent sm:to-transparent'>

        <div className='font-bold text-2xl rounded-full mr-2 text-sky-900 hover:bg-white px-4 sm:px-0 py-2 sm:py-0 hover:text-red-500 hover:mb-2 sm:hover:mb-0 hover:cursor-pointer flex justify-center items-center'>
          <img src={logo} alt='' className='block w-5 mr-1' /> <h1>Pokesearch</h1>
        </div>

        <input
          type='text'
          className='rounded-full placeholder:text-center placeholder:italic  focus:outline-none px-4 py-2 focus:ring-red-500 focus:ring-1 focus:placeholder:text-sky-900 w-full max-w-md h-8 text-sky-900 border sm:border-0 bg-white opacity-50'
          placeholder='Buscar un pokemon...'
          onChange={handleInput}
          onKeyPress={handleKeyPress}
          value={search}
        />
      </nav>
    </>
  )
}

export default Nav
