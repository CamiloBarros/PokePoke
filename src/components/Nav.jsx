import React from 'react'

const Nav = () => {
  return (
    <>
      <nav className='flex justify-center flex-wrap sm:flex-nowrap content-between sm:justify-between items-center px-10 py-2 sm:py-0  sm:shadow-sm sm:h-10 bg-transparent sm:bg-gradient-to-r sm:from-white sm:via-transparent sm:to-transparent'>

        <h1 className='font-bold text-2xl rounded-full mr-2 text-sky-900 hover:bg-white px-4 sm:px-0 py-2 sm:py-0 hover:text-sky-400 hover:mb-2 sm:hover:mb-0 hover:cursor-pointer'>
          Pokesearch
        </h1>

        <input
          type='text'
          className='rounded-full border-gray-200 placeholder:text-center placeholder:italic  focus:outline-none px-4 py-2 focus:ring-sky-400 focus:ring-1 focus:placeholder:text-sky-400 w-full max-w-md h-8 text-sky-400 border sm:border-0'
          placeholder='Buscar un pokemon...'
        />
      </nav>
    </>
  )
}

export default Nav
