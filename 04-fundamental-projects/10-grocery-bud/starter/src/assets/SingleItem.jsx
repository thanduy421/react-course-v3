import { useState } from "react";

const SingleItem = ({item, removeItem, toogleCompleted}) => {
    const {id, itemName} = item;

    return (
        <li className="item"
            style={{textDecoration: isChecked? "line-through" : "none"}}
        >
            <input
                type="checkbox"
                checked={() => toogleCompleted(id)}
                onChange={handleChange}
            />
            <span className="item-name">{itemName}</span>
            <button className="btn" onClick={() => removeItem(id)}>
                Remove
            </button>
        </li>
    )
}

export default SingleItem;