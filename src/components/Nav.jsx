import React from 'react'
import logo from '../favicon.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav className='flex justify-center flex-wrap sm:flex-nowrap content-between sm:justify-between items-center px-5 sm:py-0  sm:shadow-sm sm:h-12 bg-transparent sm:bg-gradient-to-r sm:from-white sm:via-transparent sm:to-transparent'>

        <div className='font-bold text-2xl rounded-full mr-2 text-white sm:text-sky-900 sm:hover:text-sky-800  px-4 sm:px-0 py-2 sm:py-0 hover:mb-2 sm:hover:mb-0 hover:cursor-pointer flex justify-center items-center'>
          <img src={logo} alt='' className='block w-5 mr-1' /> <h1>Pokesearch</h1>
        </div>

        <ul className='text-white flex justify-between w-52 '>
          <li><Link to='/' className='hover:border-b-2 transition ease-in duration-700'>Home</Link></li>
          <li><Link to='compare' className='hover:border-b-2 transition ease-in duration-700'>Compare</Link></li>
          <li><Link to='about' className='hover:border-b-2 transition ease-in duration-700'>About</Link></li>
        </ul>

      </nav>
    </>
  )
}

export default Nav
