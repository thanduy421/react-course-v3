import { useState } from "react";
import { nanoid as nid } from "nanoid";

const Form = ({setItems}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === '') {
            console.log('Please enter a value.');
            return;
        } else {
            const newItem = {id:nid(), itemName:inputValue, completed:false};
            setItems((state) => [...state, newItem]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="input-form">
            <div className="form-control">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter something..."
                    className="form-input"
                />
            </div>
        <button type="submit" className="btn">add item</button>
        </form>
    )
}

export default Form;