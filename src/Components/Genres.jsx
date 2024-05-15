import React from 'react'

function Genres(props) {
  return (
    <div className='border w-40 h-40 rounded-lg'>
        <img src={props.image} alt="movie" />
      <h1 className='flex text-white justify-center'>{props.title}</h1>
    </div>
  )
}

export default Genres
