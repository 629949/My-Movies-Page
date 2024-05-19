import React from 'react'

function Genres({title, image}) {
  return (
    <div className='genre' class='flex border w-2/4 h-40 rounded-lg justify-items-center gap-5 hover:scale-105'>
      <p className='text-white flex '>{title}</p>
      <img src={image} alt={`${title} cover`} />
    </div>
  )
}

export default Genres
