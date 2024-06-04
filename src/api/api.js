import axios from "axios";



const API_BASE_URL = 'http://localhost:1337'

export async function fetchMovies() {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/movies`);
        // console.log('HomePage data',response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching movie data:', error);
        throw error;
    }
};

export async function fetchGenres() {
    try{
        const response = await axios.get(`${API_BASE_URL}/api/genres`);
        console.log('Genre data', response.data)
        return response.data;
    } catch(error){
        console.error('Error fetching genres data:', error);
        throw error;
    }
    };

    export const fetchactionMovie = async (genre) => {
        const response = await fetch(`${API_BASE_URL}/api/action-movies`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      };
