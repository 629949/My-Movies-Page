import React from 'react'

function Genres({title, image}) {
  return (
    <div className='genre' class='flex  w-2/4  rounded-lg justify-items-center hover:scale-105 flex-col border'>
      <div class='flex w-auto h-4/5 rounded-lg justify-items-center'>
      <img src={image} alt={`${title} cover`} class='rounded-lg h-auto' />
      </div>
      <p className='flex text-white justify-center '>{title}</p>
    </div>
  )
}

export default Genres
