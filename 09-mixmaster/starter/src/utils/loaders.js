import { toast } from 'react-toastify';
import customFetch from '../axios/utils';

export const landingLoader = ({request}) => {
	const url = new URL(request.url);
	const searchTerm = url.searchParams.get('search') || 'all';
	//const response = await customFetch(`/search.php?s=${searchTerm}`);

	return { searchTerm };
}

export const formatSingleData = (data) => {
	const singleDrink = data[0];
	const {strDrink, strDrinkThumb, strAlcoholic, strCategory, strGlass, strInstructions } = singleDrink;
	const validIngredients = getIngredients(singleDrink);

	return {
		name: strDrink,
		image: strDrinkThumb,
		info: strAlcoholic,
		category: strCategory,
		glass: strGlass,
		instructions: strInstructions,
		ingredients:validIngredients,
	}
}

const getIngredients = (singleDrink) => {
	let ingredients = [];
	for (let i = 1; i<= 15; i++) {
		const propertyName = `strIngredient${i}`;
		const propertyValue = singleDrink[propertyName];
		if(propertyValue) {
			ingredients.push(propertyValue);
		} else {
			break;
		}
	}

	return ingredients;
}

export const singleCocktailQuery = (id) => {
	return {
		queryKey: ['cocktail', id],
		queryFn: async() => {
			const { data } = await customFetch(`/lookup.php?i=${id}`);
			
			return data.drinks;
		}
	}
}

export const singleCocktailLoader = (queryClient) => async({ params }) => {
	const { id } = params;
	try{
		await queryClient.ensureQueryData(singleCocktailQuery(id));
	} catch(error) {
		toast.error('sorry, something went wrong');
	}

	return { id };
}