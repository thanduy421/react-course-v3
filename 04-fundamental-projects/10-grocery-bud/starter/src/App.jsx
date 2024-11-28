import { useEffect } from "react";
import { useState } from "react";
import Form from "./assets/Form";
import Items from "./assets/Items";
import { nanoid as nid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

//const savedItems = JSON.parse(localStorage.getItem('items') || []);
const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    list = JSON.parse(localStorage.getItem('list'));
  } else {
    list = [];
  }
  return list;
};


const App = () => {
  const [items, setItems] = useState(getLocalStorage());

  const addItem = (inputValue) => {
    const newItem = {
      id:nid(), 
      itemName:inputValue, 
      completed:false};
    setItems((state) => [...state, newItem]);
    toast.success(`${inputValue} has been added!`)
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
    toast.success(`item has been removed!`);
  }

  const toogleCompleted = (id) => {
    setItems(items.map(item => 
      item.id === id ? {
        ...item,
        completed:!item.completed
      }: item))
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items])

  return (
    <section className="section-center form">
      <Form addItem={addItem}/>
      <Items 
        items={items} 
        removeItem={removeItem}
        toogleCompleted={toogleCompleted}/>
        <ToastContainer position="top-right"/>
    </section>
  );
};

export default App;
