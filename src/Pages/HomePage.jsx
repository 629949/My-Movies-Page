import React,{useEffect, useState} from 'react'


import Header from '../Components/Header'
import Welcome from '../Components/Welcome'
import Genres from '../Components/Genres'
import Footer from '../Components/Footer'
import Cards from '../Components/Cards'
import { fetchMovies, fetchGenres } from '../api/api'




function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const [genres, setGenres] = useState([]);
   console.log('movie', movies)
 const  findMovie = movies.find(movie => 
  movie.attributes.genre === 'Action'
 ) 
const firstMovie = findMovie?.attributes;

  useEffect(()=> {
    // try {
    //   const getData = async () => {
    //     const moviesData = await fetchMovies();
    //       setMovies(moviesData.data);
    //    setLoading(false);
    //   };

    //   getData();
    // }catch(error) {
    //   setError(error);
    //   setLoading(false);

    // }
     fetchMovies().then(response => {
      setMovies(response.data)
      setLoading(false)

     }).catch(error=> {
      setError(error);
      setLoading(false);
     })

     fetchGenres().then(response => {
      setGenres(response.data)
      setLoading(false)

     }).catch(error=> {
      setError(error);
      setLoading(false);
     })
    
  }, []);

  if (loading){
    return <div>Loading...</div>
  }

if(error){
  return <div>There was an error getting this data...</div>
}



  return (
    <div className='bg-[#040303] min-h-screen'>
      <Header/>
      <div  className='flex justify-center font-Roboto text-2xl mt-10'>
      <Welcome
      title={firstMovie.name}
      image={firstMovie.imageUrl}
      text={firstMovie.description}
      />
      </div>

      <Button
      text='Hello'/>

      <div id='featured' className='flex flex-col gap-10 mt-10 w-full justify-center'>
        <h2 className='text-amber-500 flex justify-center text-2xl'><i class='bx bx-folder-plus'>Featured</i></h2>
        <div  className=' flex justify-center mx-2 shrink-0 gap-10 lg:mx-20 '>
          {
            movies.map((movie, index)=>index < 4 && (<Genres key={movie.id}
              image={movie.attributes?.imageUrl}
              title={movie.attributes?.name}/> )
            )
          }
        
        </div>
     
      </div>

      {/* <div className="flex justify-center mt-20">
        <Cards
        height='250px'
        width='800px'
        text='Get the Best'
        paragraph='We offer the best when it comes to keeping up with the latest in the movie world.'
        />
      </div> */}

      <div id='genres' className='flex flex-col gap-5 mt-10'>
        <h2 className='flex justify-center text-amber-500 text-2xl'><i class='bx bx-folder-plus'>Genres</i></h2>
      
      <div  className='flex flex-wrap justify-center gap-10 mx-4'>
      <Cards
      text="Action"
      link='/Action'
      image= 'src\Images\fc8bdc68-5c64-4e97-b3b5-0ab34db430b5.jpeg'/>
      <Cards
      text="Comedy"
      link='/Comedy'
      image='src\Images\No Hard Feelings (2023).jpeg' />
      <Cards
      text="Romance"
      link='/Romance'
      image='src\Images\The Idea of You _ Watch online _ Hey Theater.jpeg' />
      <Cards
      text="Animation"
      link='/Anime'
      image='src\Images\Kung Fu Panda 4 (2024).jpeg' />
      
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
