 import React from 'react'

function Welcome(props) {
  return (
    <div>
      <h1 className='flex text-amber-500 justify-center'>Welcome to my Ranking page</h1>
      <image className='flex w-full h-80 justifiy-center'>
        <img class='flex w-96 h-80 object-cover align-center justify-center rounded-lg' src=".\src\Images\Attack on Titan.Jpg" alt="movie tile" />
      </image>
      <p className='text-amber-500'>Please feel free to browse through my cartaloge</p>
    </div>
  )
}

export default Welcome
