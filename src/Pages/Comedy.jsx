import React from 'react'
import Welcome from '../Components/Welcome'


function Comedy() {
  const comedyList =[
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

  const movieList = comedyList.map((movie, index) => (
    <div  key={index} className='flex flex-col hover:scale-105 border'>
    <h3>Title: {movie.title}</h3>
    <img className='flex rounded-lg w-3/5'src={movie.image} alt="Movie" />
    <p>About: {movie.About}</p>
    <a href={movie.link} target="_blank" rel="noopener noreferrer">
        {movie.Trailer}
      </a>
  </div>
    
  ))
  return (
    <div>
      <div>
      <Welcome
      title='Comedy'
      image='.\src\Images\The hangover.Jpg'
      text='Where Laughter defeats all...'/>
      </div>
     <div className='flex flex-col gap-10 w-3/4'>{movieList}</div>
    </div>
   
  )
}

export default Comedy
