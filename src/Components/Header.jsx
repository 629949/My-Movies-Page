import React from 'react'


function Header(props) {
  return (
    <div>
      <div className=" bg-slate-200 flex flex-row justify-around">
        <h1>Beta List</h1>
        <nav>
            <ul className='flex flex-row gap-x-3'>
                <li><a href="#Welcome">Home</a></li>
                <li><a href="#Feaatured">Featured</a></li>
                <li><a href="#Genres">Genre</a></li>
            </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
