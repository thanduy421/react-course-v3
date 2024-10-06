import SingleItem from "./SingleItem";

const Items = ({items, removeItem}) => {
    return (
        <ul className="grocery-list">
            {items.map((item) => (
                <SingleItem key={item.id} item={item} removeItem={removeItem}/>
            ))}
        </ul>
    )
}

export default Items;