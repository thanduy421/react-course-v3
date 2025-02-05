import {useQuery}  from '@tanstack/react-query';
import customFetch from './axios/utils';

const receiveData = (response) => {
	const photos = response?.data?.map(item => ({
			id:item.id, 
			title:item.alt_description, 
			url:item.urls.small
	}));

	return {...response, data:photos?photos:[]} 
}

export const useFetch = (query) => {
	//random meaningless query to fix fetching with empty query error
	const DEFAULT_QUERY = "GTePI6ozZ_8z2gJArAFgrY2024-11-27T15:48:51Zzuz5Q5eZn5A";
	const keyword = query?query:DEFAULT_QUERY;

	const {isLoading, isError, data} = useQuery({
		queryKey: ['photos', keyword],
		queryFn: async () => {
			const {data} = await customFetch(`/photos?query=${keyword}`);
			return data.results;
		}
    });
	
	return receiveData({isLoading, isError, data});
}