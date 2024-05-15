 import React from 'react'

function Welcome(props) {
  return (
    <div>
      <h1 className='flex text-white justify-center'>Welcome to my Ranking page</h1>
      <image className='flex w-full h-80 justifiy-items-center'>
        <img class='flex w-96 h-80 object-cover align-items-center rounded-lg' src=".\src\Images\Attack on Titan.Jpg" alt="movie tile" />
      </image>
      <p className='text-white'>Please feel free to browse through my cartaloge</p>
    </div>
  )
}

export default Welcome
