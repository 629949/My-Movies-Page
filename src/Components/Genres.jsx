import React from 'react'

function Genres(props) {
  return (
    <div className='border w-40 h-40 rounded-lg hover:border-black-600'>
        <img src={props.image} alt="movie" className='flex h-20 justify-center ' />
      <h1 className='flex text-white justify-center'>{props.title}</h1>
    </div>
  )
}

export default Genres
