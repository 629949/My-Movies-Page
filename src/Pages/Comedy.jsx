import React from 'react'
import Welcome from '../Components/Welcome'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function Comedy() {
  const List =[
    {
      title:'DeadPool & Wolverine',
      image:'src/Images/Deadpool and Wolverine (July 26).jpeg',
      About:'Wolverine is recovering from his injuries when he crosses paths with the loudmouth, Deadpool. They team up to defeat a common enemy.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi419415577/?ref_=sr_tp_vp'
    },
    {
      title:'Bad Boys: Ride or Die',
      image:'src/Images/fc8bdc68-5c64-4e97-b3b5-0ab34db430b5.jpeg',
      About:'This Summer, the worlds favorite Bad Boys are back with their iconic mix of edge-of-your seat action and outrageous comedy but this time with a twist: Miamis finest are now on the run',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi3000682009/?ref_=sr_tp_vp'
    },
    {
      title:'Babes',
      image:'src/Images/Babes Posters.jpeg',
      About:'Lifelong friends Eden and Dawn, one single and wanting a baby, the other already a mother, navigate challenges to their bond when Eden pursues pregnancy alone after a one-night stand.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi788252185/?ref_=sr_tp_vp'
    },
    {
      title:'The Roast of Tom Brady',
      image:'src/Images/The Roast of Tom Brady (2024) ⭐ 8_1 _ Documentary, Comedy.jpeg',
      About:'Tom Brady faces the heat in this livestreamed, star-studded roast hosted by Kevin Hart.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi2295645721/?ref_=sr_tp_vp'
    },
    {
      title:'No Hard Feelings',
      image:'src/Images/No Hard Feelings (2023).jpeg',
      About:'On the brink of losing her home, Maddie finds an intriguing job listing: helicopter parents looking for someone to bring their introverted 19-year-old son out of his shell before college. She has one summer to make him a man or die trying.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi3394028569/?ref_=sr_tp_vp'
    },
  ]

  const movieList = List.map((movie, index) => (
    <div  key={index} className='flex flex-col lg:flex-row w-full lg:w-4/5 mx-auto h-auto lg:h-64 hover:scale-105 items-center gap-5 border rounded-lg overflow-hidden'>
      <div className=' m-5 w-full lg:w-1/3 h-64'>
    <img className=' rounded-lg w-auto h-64'src={movie.image} alt="Movie"/>
      </div>
      <div className='flex flex-col lg:w-2/3 w-full h-64 gap-5 m-5'>
      <h3 className='text-amber-500 '> {movie.title}</h3>
      <p>About: {movie.About}</p>
    <a href={movie.link} target="_blank" rel="noopener noreferrer" className='border flex  w-1/3 h-12 rounded-lg justify-center bg-amber-500 text-black items-center font-bold'>
        {movie.Trailer}
      </a>
      </div>
  </div>
    
  ))
  return (
    <div className='flex flex-col bg-[#040303] text-white gap-10 w-full  place-content-center'>
      <Header/>
      <div className='flex flex-col'>
      <div className='flex justify-center font-Roboto text-2xl mt-10'>
        <Welcome
        title='Comedy'
        image='.\src\assets\Images\The hangover.Jpg'
        text='Laugh untill your Neighbours Complain...'/>
      </div>
     <div className='flex flex-col gap-10 font-Roboto text-xl mt-10 justify-center items-center mx-4 lg:mx-0 '>{movieList}</div>
      </div>
      <Footer/>
    </div>
   
  )
}

export default Comedy
