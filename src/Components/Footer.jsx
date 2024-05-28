import React from 'react'

function Footer(props) {
  return (
    <div className='flex flex-col gap-5 bg-gray-700 h-86 mt-8 rounded-lg justify-center'>
       <div className='flex justify-center text-amber-500'>
       <h1><i className='bx bx-phone-call'>CONTACT US</i></h1>
       </div>
      <div className='flex gap-5 justify-center'>
      
      <div >
      <h1 className='text-amber-500'>Get in touch</h1>
      <ul className='text-white'>
        <li className='hover: scale-105'><i className='bx bx-envelope'>betaRanks@gmail.com</i></li>
        <li className='hover: scale-105'><i className='bx bxl-instagram'>Instagram</i></li>
        <li className='hover: scale-105'><i className='bx bxl-github'>Github</i></li>
      </ul>
      </div>
<div className='text-white'>
  <p className='text-amber-500'>some of the sources we use  </p>
  <ul>
    <a href="https://www.imdb.com/?ref_=nv_home" target='_blank'> <li><i className='bx bxl-imdb'>IMDB</i></li></a>
   <a href="https://www.youtube.com/" target='_blank'><li><i className='bx bxl-youtube'>YouTube</i></li></a>
   <a href="https://www.netflix.com/" target='_blank'><li>Netflix</li></a>  
    <li></li>
  </ul>
</div>
<div>
  <p className='text-amber-500'>Have feedback?</p>
  <div className='flex flex-col gap-3 w-1/2'>
  <input type="text" className='rounded-lg w-40 h-32' />
  <button className='border rounded-lg bg-amber-500 '>Send</button>
  </div>
  
</div>
      </div>
      
<div className='flex justify-center bg-black h-40'>
  <p className='text-amber-500'>2024 copyright</p>
</div>
    </div>
  )
}

export default Footer
