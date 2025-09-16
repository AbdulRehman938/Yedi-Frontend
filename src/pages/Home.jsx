import React from 'react'
import Hero from '../components/Home/Hero'
import Mirror from '../components/Home/Mirror'
import Work from '../components/Home/Work'

const Home = () => {
  return (
    <div className='w-full h-full overflow-hidden'>
      <Hero />
      <Mirror />
      <Work />
    </div>
  )
}

export default Home