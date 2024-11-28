import { ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import Form from './Form';
import Items from './Items';
import { useState } from 'react';
import {useGlobalContext} from './context';

const App = () => {
  const {isLoading, items} = useGlobalContext();

  if(isLoading) {
	return <div className='loading'></div>
  }

  return (
    <section className='section-center'>
      <ToastContainer position='top-center' />
      <Form />
      <Items items={items} />
    </section>
  );
};
export default App;
