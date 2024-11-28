import { FaPlus , FaMinus  } from 'react-icons/fa';
import { useGlobalContext } from './context';

const CartItem = ({ id, img, title, price, amount }) => {
  const {remove, increase, decrease} = useGlobalContext();
  const handleRemove = () => {
		remove(id);
  }

  const handleIncrease = () => {
		increase(id);
  }  

  const handleDecrease = () => {
		if(amount === 1) {
			remove(id);
		} else {
			decrease(id);
		}
  }  

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className='item-price'>${price}</span>
        {/* remove button */}
        <button className='remove-btn' onClick={handleRemove}>
          remove
        </button>
      </div>
      <div>
        {/* decrease amount */}
        <button className='amount-btn' onClick={handleDecrease}>
          <FaMinus className='amount-icon' />
        </button>
        {/* amount */}
        <span className='amount'>{amount}</span>
        {/* increase amount */}
        <button className='amount-btn' onClick={handleIncrease}>
          <FaPlus className='amount-icon' />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
