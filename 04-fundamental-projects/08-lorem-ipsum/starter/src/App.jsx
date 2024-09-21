import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleChange = (e) => {
    //const newCount = Math.max(1,Math.min(8,e.target.value));
    const newCount = e.target.value;
    setCount(newCount);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setText(data.slice(0,count));
  }

  return (<section className="section-center">
          <h4>tired of boring lorem ipsum?</h4>
          <form onSubmit={handleSubmit} className="lorem-form">
            <label htmlFor="amount">
              paraghraphs:
            </label>
            <input 
              type="number" 
              onChange={handleChange}
              value={count}
              min = "1"
              max = "8"
              step = "1"
              name = "amount"
              id = "amount"
              />
            <button className="btn" type="submit">generate</button>
          </form>
          <article className="lorem-text">
            {text.map((paragraph) => {
              const id = nanoid();
              // console.log(id);
              return (
                <p key={id}>
                  {paragraph}
                </p>
              )
            })
            }
         </article>
        </section>);
};
export default App;
