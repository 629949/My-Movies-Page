import React from 'react'

function button({text}) {
  const detail = {
    path: path,
    text: text
  }
  return (
    <div  className='flex '>
      <button className='flex  text-white'>{text}</button>
    </div>
  )
}

export default button
