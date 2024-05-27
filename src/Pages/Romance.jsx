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
      <div className='flex w-3/4 m-5'>
        <Welcome
        title='Romance'
        image='.\src\Images\The hangover.Jpg'
        text='Lovie dovies...'/>
      </div>
     <div className='flex flex-col justify-center gap-10 w-3/4 m-5 '>{movieList}</div>
      </div>
      
    </div>
   
  )

}

export default Romance
