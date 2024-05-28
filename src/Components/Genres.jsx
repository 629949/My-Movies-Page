import React from 'react'

function Genres({title, image, height, width }) {
  const cardStyle = {
    height: height,
    width: width,
    
};
  return (
    <div className='flex  w-2/4  rounded-lg justify-center hover:scale-105 flex-col transition ease-in-out delay-150' style={cardStyle}>
      <div className='flex w-auto h-4/5 rounded-lg justify-items-center'>
      <img src={image} alt={`${title} cover`} className='rounded-lg h-auto' />
      </div>
      <p className='flex text-amber-500  justify-center '>{title}</p>
    </div>
  )
}

export default Genres
