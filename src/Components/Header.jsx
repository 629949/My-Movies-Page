import React from 'react'


function Header(props) {
  return (
    <div>
      <div className=" bg-slate-200 flex flex-row justify-around scroll-smooth">
        <h1>Beta List</h1>
        <nav>
            <ul className='flex flex-row gap-x-3'>
                <li className='hover:scale-105 border-b-2 border-amber-500'><a href="#Welcome">Home</a></li>
                <li className='hover:scale-105  border-b-2 border-amber-500'><a href="#featured">Featured</a></li>
                <li className='hover:scale-105  border-b-2 border-amber-500'><a href="#genres">Genre</a></li>
            </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
