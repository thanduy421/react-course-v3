const SingleItem = ({item, removeItem, toogleCompleted}) => {
    const {id, itemName, completed} = item;

    return (
        <li className="single-item"
        >
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toogleCompleted(id)}
            />
            <p 
                className="item-name"
                style={{textDecoration: completed && "line-through"}}
            >{itemName}</p>
            <button 
                className="btn remove-btn" 
                onClick={() => removeItem(id)}
                type="button"
            >
                Remove
            </button>
        </li>
    )
}

export default SingleItem;