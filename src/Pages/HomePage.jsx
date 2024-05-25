import React from 'react'


import Header from '../Components/Header'
import Welcome from '../Components/Welcome'
import Genres from '../Components/Genres'
import Footer from '../Components/Footer'
import Cards from '../Components/Cards'




function HomePage() {
  return (
    <div className='bg-[#070F2B]'>
      <Header/>
      <div className="welcome-section" class='flex justify-center'>
      <Welcome
      title='Welcome To the Movie base'
      image='.\src\Images\The hangover.Jpg'
      text='Please feel free to browse through.'/>
      </div>
     
      <div className='highlights flex flex-col gap-5 w-full justify-center'>
        <h2 className='text-amber-500 flex justify-center'>Featured</h2>

        <div id='featured' className='featured  flex flex-row justify-center gap-10'>
        <Genres 
      image='src\Images\John wick.Jpg'
      title='John Wick'/> 
      <Genres
          image='src\Images\Attack on Titan.Jpg'
      title='Avartar'/>
      <Genres
          image='src\Images\friends with benefit.Jpg'
      title='friends with benefit'/>
      <Genres
          image='src\Images\The hangover.Jpg'
      title='Jumanji'/>
      <Genres
          image='src\Images\Attack on Titan.Jpg'
      title='Fast and furious'/>
        </div>
     
      </div>

      <div className="category" class='flex flex-col gap-5'>
        <h2 class='flex justify-center text-amber-500'>Genres</h2>
      
      <div className="genres" id='genres' class='flex gap-10 w-full justify-center'>
      <Cards
      backgroundImage="./Images/Attack on Titan.Jpg"
      text="Action"/>
      <Cards
      text="Comedy"
      backgroundImage="./src/Images/John wick.Jpg"/>
      <Cards
      text="Drama"
      backgroundImage="./src/Images/John wick.Jpg"/>
      <Cards
      text="Animation"
      backgroundImage="./src/Images/John wick.Jpg"/>
      <Cards
      text="Horror"
      backgroundImage="./src/Images/John wick.Jpg"/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
