import React from 'react'

function Action() {
  const List =[
    {
      title:'John wick',
      About:'This is good action',
      Trailer:'Watch Trailer',
    },
    {
      title:'John wick',
      About:'This is good action',
      Trailer:'Watch Trailer',
    },
    {
      title:'John wick',
      About:'This is good action',
      Trailer:'Watch Trailer',
    },
    {
      title:'John wick',
      About:'This is good action',
      Trailer:'Watch Trailer',
    },
    {
      title:'John wick',
      About:'This is good action',
      Trailer:'Watch Trailer',
    },
  ]

  const movieList = List.map((movie) => (
    <div className='border'>
    <h3>Title: {movie.title}</h3>
    <p>About: {movie.About}</p>
    <button>{movie.Trailer}</button>
  </div>
    
  ))
  return (
    <div >{movieList}</div>
  )
}

export default Action
