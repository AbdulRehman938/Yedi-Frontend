import React from 'react'
import Hero from '../components/Home/Hero'
import Mirror from '../components/Home/Mirror'
import Work from '../components/Home/Work'
import Locations from '../components/Home/Locations'

const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Wrap sections in max width container */}
      <div className="w-full max-w-[1440px] overflow-x-visible">
        <Hero />
        <Mirror />
        <Work />
        <Locations />
      </div>
    </div>
  )
}

export default Home
