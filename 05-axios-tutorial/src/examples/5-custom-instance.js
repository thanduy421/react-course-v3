import { useEffect, useCallback } from 'react';
import axios from 'axios';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const authFetch = axios.create({
  	baseURL: 'https://www.course-api.com',
  	headers: {
  		Accept:'application/json',
  	},
  });

  const fetchData = useCallback(async () => {
		//console.log('custom axios instance');
		try{
			const page = 'react-store-products';
			const response1 = authFetch(page);
			const response2 = axios(randomUserUrl);
		} catch(error) {
			console.error(error.response);
		}
	},[]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
