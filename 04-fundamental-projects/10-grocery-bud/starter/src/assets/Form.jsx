import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({addItem}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim() === '') {
            toast.error('Please enter a value.');
            return;
        } else {
            addItem(inputValue);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="input-form">
            <h4 className="title">Grocery Bud</h4>
            <div className="form-control">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter something..."
                    className="form-input"
                />
                <button type="submit" className="btn">add item</button>
            </div>
        </form>
    )
}

export default Form;