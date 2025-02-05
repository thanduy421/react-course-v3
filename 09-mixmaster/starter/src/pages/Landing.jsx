import { useLoaderData } from 'react-router-dom';
import {SearchForm, CocktailList} from '../components';
import { useFetch } from '../utils/reactQueryCustomHook';

const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { isLoading, drinks} = useFetch(searchTerm);

  return (
    <>
      <SearchForm searchTerm={searchTerm}/>
		{isLoading 
			? (<div className='loading-container'>
					<div className='loading' />
				</div>) 
			: (<CocktailList cocktails={drinks} />)}
    </>
  );
};

export default Landing;
