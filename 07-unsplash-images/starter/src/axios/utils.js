import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const customFetch = axios.create({
	baseURL:`${apiUrl}/search`,
  	headers: {
		Authorization:apiKey,
  	},
});

export default customFetch;