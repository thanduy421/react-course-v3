import SingleItem from './SingleItem';
import {useFetchTasks} from './reactQuery';

const Items = () => {
  const {isLoading, isError, data:items} = useFetchTasks();
  console.log(items);

  if(isLoading) {
	return <div className='loading'></div>
  }

  if(isError) {
	return <p>Sorry, an error has occured</p>
  }

  return (
    <div className='items'>
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
