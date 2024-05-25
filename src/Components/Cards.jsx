import React from 'react'

function Cards({backgroundImage, text}) {
    const cardStyle = {
        backgroundImage: `url(${backgroundImage})`
    };
  return (
    <div className='flex border w-40 h-60 bg-cover bg-center rounded-lg hover:scale-105' style={cardStyle}>
        <div className="absolute bg-black bg-opacity-50 text-white p-2 rounded">{text}</div>
    </div>
  );
}

export default Cards
