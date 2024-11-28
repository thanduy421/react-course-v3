import axios from 'axios';
import { nanoid } from 'nanoid';

const authFetch = axios.create({
	baseURL:'https://jsonplaceholder.typicode.com',
  	headers: {
  		Accept:`application/json`,
		'Content-type': 'application/json; charset=UTF-8',
  	},
});

export const fetchData = async (url) => {
	try {
		const response = await authFetch(url);
		//console.log(response.data)
		return response.data;
	} catch(error) {
		console.error(error.response);
	}
}

export const actionPost = async(url, title) => {
	const newTask = {id:nanoid(), title, completed:false};
	try {
		const response = await authFetch.post(url, newTask);
		//console.log(response.data);
		return response.data;
	} catch(error) {
		console.error(error.response);
	}
}

export const actionPatch = async(url, content) => {
	const response = await authFetch.patch(url, content);
	//console.log(response);
}

export const actionDelete = async(url) => {
	const response = await authFetch.delete(url);
	console.log(response);
}

export default authFetch;