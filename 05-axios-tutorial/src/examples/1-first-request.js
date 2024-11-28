import { useEffect } from 'react';
import axios from 'axios';
// limit, if 429 wait for 15 min and try again
const url = 'https://www.course-api.com/react-store-products';

const FirstRequest = () => {
  async function fetchData() {
	try {
		const response = await axios(url);
        return response.data;
	} catch (error) {
		console.error(`Some errors had been occured: ${error.response}`);
    }
  }

  useEffect(() => {
    console.log('first axios request');
	fetchData().then(data => console.log(data));
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
