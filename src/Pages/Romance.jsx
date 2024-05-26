import React from 'react';
import Welcome from '../Components/Welcome';



function Romance() {
  const List =[
    {
      title:'The Idea of You',
      image:'/src/images/',
      About:'Solène, a 40-year-old single mom, begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi2477442585/?ref_=sr_tp_vp'
    },
    {
      title:'Mother of the Bride',
      image:'/src/images/',
      About:'Lanas daughter Emma returns from London and announces that shes getting married next month. Things become more complicated when Lana learns that the man who stole Emmas heart is the son of the man who broke hers years ago',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi1015858713/?ref_=sr_tp_vp'
    },
    {
      title:'Wicked',
      image:'/src/images/',
      About:'After two decades as one of the most beloved and enduring musicals on the stage, Wicked makes its long-awaited journey to the big screen as a spectacular, generation-defining cinematic event this holiday season.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi4040869401/?ref_=sr_tp_vp'
    },
    {
      title:'Anyone But You',
      image:'/src/images/',
      About:'After an amazing first date, Bea and Bens fiery attraction turns ice-cold--until they find themselves unexpectedly reunited at a wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi3224094489/?ref_=sr_tp_vp'
    },
    {
      title:'The Fall Guy',
      image:'/src/images/The FallGuy.jpg',
      About:'A down-and-out stuntman must find the missing star of his ex-girlfriends blockbuster film.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi3499935257/?ref_=sr_tp_vp'
    },
  ]

  const movieList = List.map((movie, index) => (
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
      title='Action'
      image='.\src\Images\The hangover.Jpg'
      text='Where Courage defeats all...'/>
      </div>
     <div className='flex flex-col gap-10 w-3/4'>{movieList}</div>
    </div>
   
  )
}

export default Romance
