import React from 'react'

function Header(props) {
  return (
    <div>
      <div className=" bg-slate-200 flex flex-row justify-around">
        <h1>Beta List</h1>
        <nav>
            <ul className='flex flex-row gap-x-3'>
                <li>Home</li>
                <li>Featured</li>
                <li>Genre</li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
