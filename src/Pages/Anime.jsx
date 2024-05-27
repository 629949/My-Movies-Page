import React from 'react'
import Welcome from '../Components/Welcome'



function Anime() {
  const List =[
    {
      title:'If',
      image:'/src/images/',
      About:'A young girl who goes through a difficult experience begins to see everyones imaginary friends who have been left behind as their real-life friends have grown up',
      Trailer:'Watch Trailer',
      link:'https://www.imdb.com/video/vi2666907161/?ref_=sr_tp_vp'
    },
    {
      title:'The Garfield Movie',
      image:'/src/images/',
      About:'After Garfields unexpected reunion with his long-lost father, ragged alley cat Vic, he and his canine friend Odie are forced from their perfectly pampered lives to join Vic on a risky heist.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi2796013081/?ref_=sr_tp_vp'
    },
    {
      title:'Kung Fu Panda 4',
      image:'/src/images/',
      About:'After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior, while a wicked sorceress plans to re-summon all the master villains whom Po has vanquished to the spirit realm.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi4087399961/?ref_=sr_tp_vp'
    },
    {
      title:'Inside Out 2',
      image:'/src/images/',
      About:'Follow Riley, in her teenage years, encountering new emotions.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi3717252633/?ref_=sr_tp_vp'
    },
    {
      title:'Dispicable Me 4',
      image:'/src/images/',
      About:'Gru, Lucy, Margo, Edith, and Agnes welcome a new member to the family, Gru Jr., who is intent on tormenting his dad. Gru faces a new nemesis in Maxime Le Mal and his girlfriend Valentina, and the family is forced to go on the run.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi2096088601/?ref_=sr_tp_vp'
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
        title='Animation'
        image='.\src\Images\The hangover.Jpg'
        text='The child in you...'/>
      </div>
     <div className='flex flex-col justify-center gap-10 w-3/4 m-5 '>{movieList}</div>
      </div>
      
    </div>
   
  )
{
 /* const movieList = List.map((movie, index) => (
    <div key={index} className='flex flex-col hover:scale-105 border'>
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
      title='Animation'
      image='.\src\Images\The hangover.Jpg'
      text='The Childhood that never left'/>
      </div>
     <div className='flex flex-col gap-10 w-3/4'>{movieList}</div>
    </div>
   
  )*/}
}

export default Anime
