import {useToggleTask, useDeleteTask} from './reactQuery';

const SingleItem = ({ item }) => {
  const {toggleTask} = useToggleTask();
  const {deleteTask, isLoading} = useDeleteTask();

  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => toggleTask({id:item.id, isCompleted:!item.completed})}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.title}
      </p>
      <button
        className='btn remove-btn'
        type='button'
        onClick={() => deleteTask(item.id)}
		disabled={isLoading}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
