 import React from 'react'

function Welcome(props) {
  return (
    <div className='flex flex-col items-center'>
      <h1 className='flex text-amber-500 justify-center'>{props.title}</h1>
      <image class='flex w-full h-80 justifiy-center items-center'>
        <img class=' w-full h-80 object-center align-center justify-center rounded-lg border ' src={props.image} alt="movie tile" />
      </image>
      <p className='flex text-amber-500 justify-center'>{props.text}</p>
    </div>
  )
}

export default Welcome
