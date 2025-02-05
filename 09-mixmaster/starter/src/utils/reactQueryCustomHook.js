import { useQuery } from '@tanstack/react-query';
import customFetch from '../axios/utils';

const formattedData = (drinks) => {
    const formattedDrinks = drinks.map(drink => {
		const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
		
		return {
			id: idDrink,
			name: strDrink,
			image: strDrinkThumb,
			info: strAlcoholic,
			glass: strGlass
		};
	});

	return formattedDrinks;
};

export const useFetch = (searchTerm) => {
    const {isLoading, data} = useQuery({
		queryKey: ['search', searchTerm],
		queryFn: async () => {
			const response = await customFetch(`/search.php?s=${searchTerm}`);
			
			return response.data.drinks;
		}
	});

	return {isLoading, drinks:data && formattedData(data)};
}