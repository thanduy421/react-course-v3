import { useState } from 'react';
import {useGlobalContext} from './context';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  const {addTask} = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newItemName);
    setNewItemName('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text '
          className='form-input'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn'>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
