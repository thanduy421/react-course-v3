export const LOADING = 'LOADING';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE = 'REMOVE';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const HIDE_LOADING = 'HIDE_LOADING';

export const  showLoading = () => {
	return {
		type: LOADING,
	};
}

export const  hideLoading = () => {
	return {
		type: HIDE_LOADING,
	};
}

export const  handleClearCart = () => {
	return {
		type: CLEAR_CART
	};
}

export const  receiveData = (data) => {
	return {
		type: RECEIVE_DATA,
		payload: data,
	};
}

export const handleRemove = (id) => {
	return {
		type: REMOVE,
		payloadId: id,
	};
}

export const handleIncrease = (id) => {
	return {
		type: INCREASE,
		payloadId: id,
	};
}

export const handleDecrease = (id) => {
	return {
		type: DECREASE,
		payloadId: id,
	};
}