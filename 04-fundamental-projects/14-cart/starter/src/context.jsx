import {useContext, useReducer, useEffect, createContext} from 'react';
import reducer from './reducer';
import {
	handleClearCart,
	handleRemove,
	handleIncrease,
	handleDecrease,
	receiveData,
	showLoading,
	hideLoading,
} from './actions';
//import cartItems from './data';  //TODO: for testing
import {fetchData} from './utils';

const AppContext = createContext();

const initialState = {
	cart: new Map(),
	loading:false,
	//cart: new Map(cartItems.map((item) => [item.id, item])),
}

export const AppProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	
	const clearCart = () => {
		dispatch(handleClearCart());
	};
	
	const remove = (id) => {
		dispatch(handleRemove(id));
	}

	const increase = (id) => {
		dispatch(handleIncrease(id));
	}
	
	const decrease = (id) => {
		dispatch(handleDecrease(id));
	}
	
	const handleInitialData = () => {
		dispatch(showLoading());

		fetchData().then( data => {
			dispatch(receiveData(data));
			dispatch(hideLoading());
		});
	}
	
	useEffect(() => {
		handleInitialData();
	}, []);
	
	return (
		<AppContext.Provider value={{
			...state,
			clearCart,
			remove,
			increase,
			decrease,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};