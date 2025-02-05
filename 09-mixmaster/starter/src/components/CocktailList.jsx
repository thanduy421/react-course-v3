import CocktailCard from './CocktailCard';
import Wrapper from '../assets/wrappers/CocktailList';

const CocktailList = ({ cocktails }) => {
  //handling empty array
  if(!cocktails) {
    return (
		<Wrapper>
		  <h4 className='not-found'>Sorry, no matching results found...</h4>
		</Wrapper>
	)
  }

  return (
    <Wrapper>
      <ul className='cocktail-list'>
      {cocktails.map((cocktail) => (
        <CocktailCard key={cocktail.id} cocktail={cocktail} />
      ))}
      </ul>
    </Wrapper>
  );
};

export default CocktailList;
