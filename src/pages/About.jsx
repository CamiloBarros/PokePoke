import React from 'react'
import Banner from '../assets/Banner_Encoding.jpg'
const About = () => {
  return (
    <div className='flex justify-center'>
      <div className='rounded-md text-center shadow-sm max-w-md bg-white/40 backdrop-blur-xl overflow-auto mt-10'>
        <header className='mb-4'>
          <img src={Banner} alt='Banner_Encoding' className='w-full object-cover mx-auto' />
        </header>
        <section className='p-4'>
          <h1 className='text-slate-900 font-semibold text-xl mb-4'>Hi there 👋, my name is Omar Camilo Barros</h1>
          <p className='text-slate-900'>I am currently a last semester student in systems engineering. I have been passionate about programming for a long time, since then I have not stopped doing it and therefore I have been acquiring experience in some languages and technologies.</p>
          <p className='text-slate-900'>As you can already deduce, I am the creator of this page whose only purpose is to show the result of putting into practice some concepts of React and use of modern technologies such as Tailwinds and Vite.</p>
        </section>
      </div>
    </div>
  )
}

export default About
