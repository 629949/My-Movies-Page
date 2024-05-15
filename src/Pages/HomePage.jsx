import React from 'react'
import Header from '../Components/Header'
import Welcome from '../Components/Welcome'
import Genres from '../Components/Genres'




function HomePage() {
  return (
    <div className='bg-[#2D3250]'>
      <Header/>
      <Welcome/>
      <div className='highlights flex flex-col gap-5 w-full justify-center'>
        <h2 className='text-amber-500 flex justify-center'>Featured</h2>

        <div className='featured flex flex-row justify-center gap-10'>
        <Genres 
      image='.\src\Images\Attack on Titan.Jpg'
      title='Avatar'/>
      <Genres/>
      <Genres/>
      <Genres/>
      <Genres/>
        </div>
     
      </div>

      <div className="category" class='flex flex-col gap-5'>
        <h2 class='flex justify-center text-amber-500'>Genres</h2>
      
      <div className="genres" class='flex gap-10 w-full justify-center'>
      <Genres
      title='Action'/>
      <Genres
      title='Comedy'/>
      <Genres
      title='Anime'/>
      <Genres
      title='Romance'/>
      </div>
      </div>
    </div>
  )
}

export default HomePage
