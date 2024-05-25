import React from 'react'

function Romance() {
  const List =[
    {
      title:'John wick',
      image:'/src/images/John wick.Jpg',
      About:'John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi289916185/?playlistId=tt10366206&ref_=tt_pr_ov_vi'
    },
    {
      title:'Kingdom of the Planet of the Apes',
      image:'/src/images/kingdom_of_the_planet_of_the_apes_.avif',
      About:'Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything hes been taught about the past and make choices that will define a future for apes and humans alike',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi904447513/?ref_=sr_tp_vp'
    },
    {
      title:'Fall Out',
      image:'/src/images/FallOut.jpeg',
      About:'In a future, post-apocalyptic Los Angeles brought about by nuclear decimation, citizens must live in underground bunkers to protect themselves from radiation, mutants and bandits.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi788252185/?ref_=sr_tp_vp'
    },
    {
      title:'Godzilla X Kong',
      image:'/src/images/Godzilla X Kong.jpg',
      About:'Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Islands mysteries.',
      Trailer:'Watch Trailer',
      link: 'https://www.imdb.com/video/vi2055259673/?ref_=sr_tp_vp'
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
