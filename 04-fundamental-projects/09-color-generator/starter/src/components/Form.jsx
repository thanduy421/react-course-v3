import { useState } from 'react';
import Values from 'values.js';

const Form = ({onSubmit}) => {
  const DEFAULT_COLOR = '#aa7942';
  const [color, setColor] = useState(DEFAULT_COLOR);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setColor(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(color);
  }

  return (
    <section className="container">
        <h4>color generator</h4>
      <form onSubmit={handleSubmit}
          className="color-form"
      >
        <input
          type="color"
          value={color}
          onChange={handleChange}
        />
        <input
          type="text"
          value={color}
          onChange={handleChange}
          placeholder='#000000'
        />
        <button type="submit"
            className="btn"
            style={{background:color}}
        >
        Submit
        </button>
      </form>
    </section>
  );
};

export default Form;