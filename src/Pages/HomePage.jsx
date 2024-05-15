import React from 'react'
import Header from '../Components/Header'
import Welcome from '../Components/Welcome'
import Genres from '../Components/Genres'




function HomePage() {
  return (
    <div className='bg-[#2D3250]'>
      <Header/>
      <Welcome/>
      <Genres/>
    </div>
  )
}

export default HomePage
