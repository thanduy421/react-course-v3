import {useGlobalContext} from './context';
import {useRef} from 'react';
import { toast } from 'react-toastify';

const SearchForm = () => {
	const {isDarkTheme, setQuery, isLoading} = useGlobalContext();
	const refContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
		const inputVal = refContainer.current.value;
		if(inputVal) {
			setQuery(inputVal)
		} else {
			toast.error('please input keyword');
		}
    };

    return (
		<section>
			<h1 className="title">unsplash Images</h1>
			<form onSubmit={handleSubmit} 
				  className='search-form'>
				<input
					type="search"
					placeholder="Search..."
					className={isDarkTheme?'search-input dark-theme':'search-input'}
					ref={refContainer}
				/>
				<button type="submit" className="btn" disabled={isLoading}>Search</button>
			</form>
		</section>
    );
};

export default SearchForm;
