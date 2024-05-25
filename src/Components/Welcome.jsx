 import React from 'react'

function Welcome(props) {
  return (
    <div className='flex flex-col justify-center  w-full'>
      <h1 className='flex text-amber-500 justify-center'>{props.title}</h1>
      <div className='flex justify-center items-center w-full h-80  '>
        <img className='h-80 w-3/5 object-center align-center rounded-lg ' src={props.image} alt="movie tile" />
      </div>
      <p className='flex text-amber-500 justify-center'>{props.text}</p>
    </div>
  )
}

export default Welcome
