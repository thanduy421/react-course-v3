import customFetch from '../axios/utils';
import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

const newsletterUrl = import.meta.env.VITE_NEWSLETTER_API_URL;

export const newsletterAction = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  //console.log(data);
	
  try {
	const response = await customFetch.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
	return redirect('/');
  } catch(error) {
	console.error(error);
	toast.error(error.response?.data?.msg);
	return error;
  }
};
