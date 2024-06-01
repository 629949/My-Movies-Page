import React from 'react'

function Header(props) {
  return (
    <div>
      <div className=" bg-slate-200 flex flex-row justify-around text-black scroll-smooth">
        <h1><i class='bx bxs-camera-movie'>Beta List</i></h1>
        <nav>
            <ul className='flex flex-row gap-x-3'>
                <li className='hover:scale-105 border-b-2 border-amber-500 gap-2'><a href="#Welcome"><i class='bx bx-home '>Home</i></a></li>
                <li className='hover:scale-105  border-b-2 border-amber-500'><a href="#featured">Featured</a></li>
                <li className='hover:scale-105  border-b-2 border-amber-500'><a href="#genres">Genre</a></li>
                <input type="text"  className='border'/>
            </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
