import React from 'react'

function Footer(props) {
  return (
    <div className='flex gap-5 bg-grey-200 h-96 mt-8 border justify-center'>
      <div>
      <h1 className='text-amber-500'>Get in touch</h1>
      <ul className='text-white'>
        <li>betaRanks@gmail.com</li>
        <li>Instagram</li>
        <li>Github</li>
      </ul>
      </div>
<div className='text-white'>
  <p className='text-amber-500'>some of the sources we use  </p>
  <ul>
    <a href="https://www.imdb.com/?ref_=nv_home" target='_blank'> <li>IMDB</li></a>
   <a href="https://www.youtube.com/" target='_blank'><li>YouTube</li></a>
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
  )
}

export default Footer
