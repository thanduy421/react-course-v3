import { useEffect } from "react";
import { useState } from "react";
import Form from "./assets/Form";
import Items from "./assets/Items";

const App = () => {
  const [items, setItems] = useState(getData());

  const getData = () => {
    const savedItems = localStorage.getItem('items');
    return savedItems ? JSON.parse(savedItems) : [];
  }

  const removeItem = (id) => (
    setItems(items.filter(item => item.id !== id))
  )

  const toogleCompleted = (id) => {
    setItems(items.map(item => 
      item.id === id ? {
        ...item,
        completed:!item.completed
      }: item))
  }

  useEffect(() => {
    localStorage.setItem('item', JSON.stringify(items));
  }, [items])

  return (
    <section className="section-center">
      <h2>Grocery Bud - Starter</h2>
      <Form setItems={setItems}/>
      <Items items={items} 
        removeItem={removeItem}
        toogleCompleted={toogleCompleted}/>
    </section>
  );
};

export default App;
