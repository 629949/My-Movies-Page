import React from 'react'

function Genres(props) {
  const{type, image, title, color} = props

  if (type === 'image') {

  return (
    <div className='border w-40 h-44 rounded-lg hover:scale-105 hover:shadow-lg'>
        <img src={image} alt="movie" className='flex h-20 justify-center ' />
      <h1 className='flex text-white justify-center'>{title}</h1>
    </div>
  )
} 
else if (type === 'color') {
const style = {
  backgroundColor: color,
}
};

return (
  <div className='border w-40 h-44 rounded-lg hover:scale-105 hover:shadow-lg' style={style}>
    <h1 className='flex text-white justify-center'>{title}</h1>
  </div>
);
}

export default Genres
