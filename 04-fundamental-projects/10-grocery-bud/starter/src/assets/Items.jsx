import SingleItem from "./SingleItem";

const Items = ({items, removeItem, toogleCompleted}) => {
    return (
        <ul className="items">
            {items.map((item) => (
                <SingleItem 
                    key={item.id} 
                    item={item} 
                    removeItem={removeItem}
                    toogleCompleted={toogleCompleted}/>
            ))}
        </ul>
    )
}

export default Items;