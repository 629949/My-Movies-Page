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
      <div className="welcome-section" class='flex justify-center font-Roboto text-2xl mt-10'>
      <Welcome
      title='Welcome To the Movie base'
      image='.\src\Images\The hangover.Jpg'
      text='Please feel free to browse through.'/>
      </div>
     
      <div id='featured' className=' flex flex-col gap-10 mt-10 w-full justify-center'>
        <h2 className='text-amber-500 flex justify-center text-2xl'>Featured</h2>

        <div  className='featured  flex flex-row justify-center gap-10'>
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

      <div className="flex justify-center mt-20">
        <Cards
        height='250px'
        width='800px'
        text='Get the Best'
        paragraph='We offer the best when it comes to keeping up with the latest in the movie world.'
        />
      </div>

      <div id='genres' className='flex flex-col gap-5 mt-10'>
        <h2 class='flex justify-center text-amber-500 text-2xl'>Genres</h2>
      
      <div className="genres"  class='flex gap-10 w-full justify-center'>
      <Cards
      backgroundImage="./Images/Attack on Titan.Jpg"
      text="Action"
      link='/Action'/>
      <Cards
      text="Comedy"
      backgroundImage="./src/Images/John wick.Jpg"
      link='/Comedy'/>
      <Cards
      text="Romance"
      backgroundImage="./src/Images/John wick.Jpg"
      link='/Romance'/>
      <Cards
      text="Animation"
      backgroundImage="./src/Images/John wick.Jpg"
      link='/Animation'/>
      <Cards
      text="Horror"
      backgroundImage="./src/Images/John wick.Jpg"
      link='/Horror'/>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
