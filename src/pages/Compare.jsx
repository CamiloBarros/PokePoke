import React from 'react'
import Card from '../components/Card'

const Compare = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 gap-2'>
      <div className='mb-14 sm:mb-8 lg:mb-0'>
        <Card id='2' />
      </div>
      <div className=''>
        <Card id='3' />
      </div>
    </div>
  )
}

export default Compare
