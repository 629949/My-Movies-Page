import React from 'react'

function Cards({ text, link, height, width, paragraph, image}) {
    const cardStyle = {
        height: height,
        width: width,
      
        
    };
  return (
    <a href={link} className='flex border w-40 h-60 bg-cover bg-gray-700 rounded-lg hover:scale-105 transition ease-in-out delay-150' style={cardStyle}>
        <div className="flex justify-center text-center absolute bg-slate-900 bg-opacity-50 text-white p-2 rounded">{text}</div>
        <p className='flex text-amber-500 w-1/2'>{paragraph}</p>
        <img src={image} alt="category" />
    </a>
  );
}

export default Cards
