import React, { useEffect, useState } from 'react'
import Welcome from '../Components/Welcome'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import {Link} from 'react-router-dom'
import { fetchanimationMovie } from '../api/api'; 

function Anime() {
  
  const [animationMovie, setanimationMovies]= useState([]);
  const  [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetchanimationMovie()
    .then(response => {
      setanimationMovies(response.data);
      console.log(response.data)
     setLoading(false);
    })
    .catch(error => {
  setError(error);
  setLoading(false)})
  }, []);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">There was an error getting this data...</div>;
  }

  const movieList = animationMovie.map((animationMovie, index) => index < 4 && (
    <div key={index} className="flex flex-col lg:flex-row w-full lg:w-4/5 mx-auto h-auto lg:h-64 hover:scale-105 items-center gap-5 border rounded-lg overflow-hidden">
      <div className="m-5 w-full lg:w-1/3 h-64">
        <img className="rounded-lg w-full h-64 object-cover" src={animationMovie.attributes.imageUrl} alt="Movie" />
        
      </div>
      <div className="flex flex-col lg:w-2/3 w-full h-64 gap-5 m-5">
        <h3 className="text-amber-500"> {animationMovie.attributes.title}</h3>
        <p> {animationMovie.attributes.About}</p>
        <a href={animationMovie.attributes.trailerLink} target="_blank" rel="noopener noreferrer" className="border flex w-1/2 lg:w-1/3 h-12 rounded-lg justify-center bg-amber-500 text-black items-center font-bold">
          Watch Trailer
        </a>
      </div>
    </div>
  ));
  return (
    <div className='flex flex-col bg-[#040303] text-white gap-10 w-full  place-content-center'>
      <div className='flex flex-col'>
        <Header/>
      <div className='flex justify-center font-Roboto text-2xl mt-10'>
        <Welcome
        title='Animation'
        image='src\Images\wp8669051-kny-manga-desktop-wallpapers.jpg'
        text='The child in you...'/>
      </div>

      <div className='flex justify-center gap-10 h-12 '>
      <Link to='/' className='flex text-xl mt-5 hover:scale-105 hover:underline-offset-1'>Home</Link>
      <Link to='/Comedy' className='flex text-xl mt-5 hover:scale-105 hover:underline-offset-1'>Comedy</Link>
      <Link to='/Romance' className='flex text-xl mt-5 hover:scale-105 hover:underline-offset-1'>Romance</Link>
      <Link to='/Action' className='flex text-xl mt-5 hover:scale-105 hover:underline-offset-1'>Action</Link>
      </div>

     <div className='flex flex-col gap-10 font-Roboto text-xl mt-10 justify-center items-center mx-4 lg:mx-0'>{movieList}</div>
      </div>
      <Footer/>
    </div>
   
  )

}

export default Anime
