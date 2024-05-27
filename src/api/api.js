import axios from "axios";



const API_BASE_URL = 'http://localhost:1337'

export const fetchWelcomeData = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/welcome`);
        return response.data;
    } catch (error) {
        console.error('Error fetching welcome data:', error);
        throw error;
    }
};

export const fetchGenresData = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/genres`);
        return response.data;
    } catch(error){
        console.error('Error fetching genres data:', error);
        throw error;
    }
    };
