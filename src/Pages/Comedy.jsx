import React from 'react'
import Welcome from '../Components/Welcome'


function Comedy() {
  const List =[
    {
      title:'DeadPool & Wolverine',
      image:'/src/images/',
      About:'Wolverine is recovering from his injuries when he crosses paths with the loudmouth, Deadpool. They team up to defeat a common enemy.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi419415577/?ref_=sr_tp_vp'
    },
    {
      title:'Bad Boys: Ride or Die',
      image:'/src/images/',
      About:'This Summer, the worlds favorite Bad Boys are back with their iconic mix of edge-of-your seat action and outrageous comedy but this time with a twist: Miamis finest are now on the run',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi3000682009/?ref_=sr_tp_vp'
    },
    {
      title:'Babes',
      image:'/src/images/',
      About:'Lifelong friends Eden and Dawn, one single and wanting a baby, the other already a mother, navigate challenges to their bond when Eden pursues pregnancy alone after a one-night stand.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi788252185/?ref_=sr_tp_vp'
    },
    {
      title:'The Roast of Tom Brady',
      image:'/src/images/',
      About:'Tom Brady faces the heat in this livestreamed, star-studded roast hosted by Kevin Hart.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi2295645721/?ref_=sr_tp_vp'
    },
    {
      title:'No Hard Feelings',
      image:'/src/images/',
      About:'On the brink of losing her home, Maddie finds an intriguing job listing: helicopter parents looking for someone to bring their introverted 19-year-old son out of his shell before college. She has one summer to make him a man or die trying.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi3394028569/?ref_=sr_tp_vp'
    },
  ]

  const movieList = List.map((movie, index) => (
    <div  key={index} className='flex flex-row w-4/5 h-50 hover:scale-105 items-center gap-1 border rounded-lg'>
      <div className=' m-5 w-96 h-64'>
    <img className=' rounded-lg w-auto h-64'src={movie.image} alt="Movie"/>
      </div>
      <div className='flex flex-col w-full h-64 gap-5 m-5'>
      <h3 className='text-amber-500 '> {movie.title}</h3>
      <p>About: {movie.About}</p>
    <a href={movie.link} target="_blank" rel="noopener noreferrer" className='border flex w-28 h-10 rounded-lg justify-center bg-amber-500 text-black items-center font-bold'>
        {movie.Trailer}
      </a>
      </div>
  </div>
    
  ))
  return (
    <div className='flex flex-col bg-[#070F2B] text-white gap-10 w-full  place-content-center'>
      <div className='flex flex-col'>
      <div className='flex justify-center font-Roboto text-2xl mt-10'>
        <Welcome
        title='Comedy'
        image='.\src\Images\The hangover.Jpg'
        text='Laugh untill your Neighbours Complain...'/>
      </div>
     <div className='flex flex-col justify-center gap-10 w-3/4 text-xl mt-10 '>{movieList}</div>
      </div>
      
    </div>
   
  )
}

export default Comedy
