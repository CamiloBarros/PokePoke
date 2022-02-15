import React from 'react'

const BarSearch = ({ handleInput, handleKeyPress, search }) => {
  return (
    <div className='text-center mt-5'>
      <input
        type='text'
        className='placeholder:text-center placeholder:text-gray-300 border-b-2 border-gray-200 focus:outline-none focus:placeholder:text-transparent bg-transparent text-gray-300 text-center w-full max-w-md h-8'
        placeholder='Buscar un pokemon...'
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        value={search}
      />
    </div>
  )
}

export default BarSearch
