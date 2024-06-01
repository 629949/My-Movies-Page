import React from 'react';
import Welcome from '../Components/Welcome';
import Header from '../Components/Header';
import Footer from '../Components/Footer';


function Romance() {
  const List =[
    {
      title:'The Idea of You',
      image:'src/Images/The Idea of You _ Watch online _ Hey Theater.jpeg',
      About:'Solène, a 40-year-old single mom, begins an unexpected romance with 24-year-old Hayes Campbell, the lead singer of August Moon, the hottest boy band on the planet.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi2477442585/?ref_=sr_tp_vp'
    },
    {
      title:'Mother of the Bride',
      image:'src/Images/Bekijk de trailer van Mother of the Bride.jpeg',
      About:'Lanas daughter Emma returns from London and announces that shes getting married next month. Things become more complicated when Lana learns that the man who stole Emmas heart is the son of the man who broke hers years ago',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi1015858713/?ref_=sr_tp_vp'
    },
    {
      title:'Wicked',
      image:'src/Images/new wicked movie poster 🩷💚.jpeg',
      About:'After two decades as one of the most beloved and enduring musicals on the stage, Wicked makes its long-awaited journey to the big screen as a spectacular, generation-defining cinematic event this holiday season.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi4040869401/?ref_=sr_tp_vp'
    },
    {
      title:'Anyone But You',
      image:'src/Images/Только не ты _ Anyone But You 2023.jpeg',
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
    <div  key={index} className='flex flex-col lg:flex-row w-full lg:w-4/5 mx-auto h-auto lg:h-64 hover:scale-105 items-center gap-5 border rounded-lg overflow-hidden'>
      <div className='m-5 w-full lg:w-1/3 h-64'>
    <img className='rounded-lg w-full h-full object-cover'src={movie.image} alt="Movie"/>
      </div>
      <div className='flex flex-col w-full h-64 gap-5 m-5'>
      <h3 className='text-amber-500 '> {movie.title}</h3>
      <p>About: {movie.About}</p>
    <a href={movie.link} target="_blank" rel="noopener noreferrer" className='border flex w-1/2 lg:w-1/3 h-12 rounded-lg justify-center bg-amber-500 text-black items-center font-bold'>
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
        title='Romance'
        image='.\src\Images\The hangover.Jpg'
        text='Lovie dovies...'/>
      </div>
     <div className='flex flex-col gap-10 font-Roboto text-xl mt-10 justify-center items-center mx-4 lg:mx-0'>{movieList}</div>
      </div>
      <Footer/>
    </div>
   
  )

}

export default Romance
