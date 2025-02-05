import {createContext, useContext, useState, useEffect} from 'react';
import {useFetch} from './reactQuerycustomHooks';

const AppContext = createContext();

const getInitialDarkMode = () => {
	return window.matchMedia(
		'(prefers-color-scheme:dark)'
	).matches;
}

export const AppProvider = (({children}) => {
	const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
	// set default query to avoid error when calling hook
	const [query, setQuery] = useState('');
	const {isLoading, isError, data} = useFetch(query);
	
	const toggleDarkTheme = () => setIsDarkTheme(!isDarkTheme);

	useEffect(()=>{
		document.body.classList.toggle('dark-theme', isDarkTheme);
	},[isDarkTheme])


	return (
		<AppContext.Provider value={{
				isDarkTheme,
				toggleDarkTheme,
				query,
				setQuery,
				isLoading,
				isError,
				data,
			}}
		>
			{children}
		</AppContext.Provider>
		);
});

export const useGlobalContext = () => {
	return useContext(AppContext);
};

