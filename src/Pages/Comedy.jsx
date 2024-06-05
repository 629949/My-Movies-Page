import React, {useState, useEffect} from 'react'
import Welcome from '../Components/Welcome'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import { fetchcomedyMovie } from '../api/api'
function Comedy() {
 
  const [comedyMovie, setcomedyMovies]= useState([]);
  const  [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    fetchcomedyMovie()
    .then(response => {
      setcomedyMovies(response.data);
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

  const movieList = comedyMovie.map((comedyMovie, index) => index < 4 && (
    <div key={index} className="flex flex-col lg:flex-row w-full lg:w-4/5 mx-auto h-auto lg:h-64 hover:scale-105 items-center gap-5 border rounded-lg overflow-hidden">
      <div className="m-5 w-full lg:w-1/3 h-64">
        <img className="rounded-lg w-full h-64 object-cover" src={comedyMovie.attributes.imageUrl} alt="Movie" />
        
      </div>
      <div className="flex flex-col lg:w-2/3 w-full h-64 gap-5 m-5">
        <h3 className="text-amber-500"> {comedyMovie.attributes.title}</h3>
        <p> {comedyMovie.attributes.About}</p>
        <a href={comedyMovie.attributes.trailerLink} target="_blank" rel="noopener noreferrer" className="border flex w-1/2 lg:w-1/3 h-12 rounded-lg justify-center bg-amber-500 text-black items-center font-bold">
          Watch Trailer
        </a>
      </div>
    </div>
  ));
  return (
    <div className='flex flex-col bg-[#040303] text-white gap-10 w-full  place-content-center'>
      <Header/>
      <div className='flex flex-col'>
      <div className='flex justify-center font-Roboto text-2xl mt-10'>
        <Welcome
        title='Comedy'
        image='.\src\Images\The hangover.Jpg'
        text='Laugh untill your Neighbours Complain...'/>
      </div>

      <div className='flex justify-center gap-10 h-12 '>
      <Link to='/' className='flex text-xl mt-5 hover:scale-105 hover:underline-offset-1'>Home</Link>
      <Link to='/Action' className='flex text-xl mt-5 hover:scale-105 hover:underline-offset-1'>Action</Link>
      <Link to='/Romance' className='flex text-xl mt-5 hover:scale-105 hover:underline-offset-1'>Romance</Link>
      <Link to='/Anime' className='flex text-xl mt-5 hover:scale-105 hover:underline-offset-1'>Animation</Link>
      </div>

     <div className='flex flex-col gap-10 font-Roboto text-xl mt-10 justify-center items-center mx-4 lg:mx-0 '>{movieList}</div>
      </div>
      <Footer/>
    </div>
   
  )
}

export default Comedy
