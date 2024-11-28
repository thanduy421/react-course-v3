import { useEffect } from 'react';
import axios from 'axios';
const url = 'https://www.course-api.com/react-store-products';

const authFetch = axios.create({
  	headers: {
        'Content-Type':`application/x-www-form-urlencoded`,
  	},
});

authFetch.interceptors.request.use(
  (request) => {
    // request.headers.common['Accept'] = `application/json`;
    request.headers['Accept'] = `application/json`;

    console.log('request sent');
    // must return request
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    console.log('got response');
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
  }
);


const Interceptors = () => {
  const fetchData = async () => {
    //console.log('axios interceptors');
	try {
		const response = authFetch(url);
	} catch (error) {
		console.error(error.response);
	}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
};
export default Interceptors;
