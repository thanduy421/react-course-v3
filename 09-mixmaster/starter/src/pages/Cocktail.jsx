import { useLoaderData, Navigate } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailPage';
import { useQuery } from '@tanstack/react-query';
import { formatSingleData, singleCocktailQuery } from '../utils/loaders';

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data:drink } = useQuery(singleCocktailQuery(id));
  //auto return to home page when fetch failed
  //use redirect in loader to avoid duplicate toaster message if 
  // I put the toaster in here
  if(!drink) {
    return <Navigate to='/'/>;
  }
  
  const {name, image, info, category, glass, instructions, ingredients} = formatSingleData(drink);

  return (
    <Wrapper>
      <header>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
			<img src={image} alt={name} className='img'/>
			<div className='drink-info'>
			<p>
			  <span className='drink-data'>name :</span> 
			  <span className='description'>{name}</span> 
			</p>
			<p>
			  <span className='drink-data'>category :</span> 
			  <span className='description'>{category}</span> 
			</p>
			<p>
			  <span className='drink-data'>info :</span>
			  <span className='description'>{info}</span> 
			</p>
			<p>
			  <span className='drink-data'>glass :</span>
			  <span className='description'>{glass}</span> 
			</p>
			<p>
			  <span className='drink-data'>ingredients :</span> 
			  {ingredients.map((item, index) => {
				return (
				  <span className='ing description' key={item}>
					{item} {index < ingredients.length - 1 ? ',' : '.'}
				  </span>
				)
			  })}
			</p>
			<p>
			  <span className='drink-data'>instructions :</span>
			  <span className='description'>{instructions}</span> 
			</p>			
			</div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
