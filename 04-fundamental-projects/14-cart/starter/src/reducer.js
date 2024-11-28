import {
	LOADING,
	CLEAR_CART,
	REMOVE,
    INCREASE,
    DECREASE,
	RECEIVE_DATA,
	HIDE_LOADING,
} from './actions';

const reducer = (state, action) => {
	console.log(action.type);
	switch (action.type) {
		case LOADING:
			return {...state, loading:true};
			break;
		case HIDE_LOADING:
			return {...state, loading:false};
			break;
		case CLEAR_CART:
			return {...state,
					cart: new Map()
				};
		case RECEIVE_DATA:
			return {
				...state,
				cart: new Map(action.payload.map((item) => [item.id, item])),
			};
		case REMOVE:
			const newCart = new Map(state.cart);
			newCart.delete(action.payloadId);
			return {
				...state,
				cart: newCart,
			}
			break;
		case INCREASE:
			const newCart2 = new Map(state.cart);
			const item2 = newCart2.get(action.payloadId);
			const newItem2 = {...item2, amount: item2.amount + 1};
			newCart2.set(action.payloadId, newItem2);
			return {
				...state,
				cart: newCart2,
			}
		case DECREASE:
			const newCart3 = new Map(state.cart);
			const item3 = newCart3.get(action.payloadId);
			const newItem3 = {...item3, amount: item3.amount ===1? 1: item3.amount - 1};
			newCart3.set(action.payloadId, newItem3);
			return {
				...state,
				cart: newCart3,
			}
		default:
			console.log(`action was not existed: ${action.type}`);
	}
}

export default reducer;