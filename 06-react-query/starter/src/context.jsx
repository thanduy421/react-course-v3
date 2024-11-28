import {useContext, createContext, useState, useEffect} from 'react';
import {
	fetchData, 
	actionPost, 
	actionPatch,
	actionDelete,
} from './axios/utils';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

const AppContext = createContext();

export const AppProvider = ({children}) => {
	const [items, setItems] = useState(null);
	const page = '/users/1/todos';
    const updatePage = '/todos';

    useEffect(() => {
      fetchData(page).then(data => setItems(data));
    }, []);
	
	const addTask = (newItemName) => {
		actionPost(page, newItemName)
			.then(data => {
				//fix bug from dummy server always return the same id
				const newItem = {...data, id:nanoid()};
				const newItems = [...items, newItem];
				setItems(newItems);
				toast.success('new Task was added')
			});
	}
	
	
	const toggleTask = (id) => {
		const updateItems = (id) => {
			const newItems = items.map(item => {
				if(item.id === id) {
					const newItem = {...item, completed:!item.completed};
					return newItem;
				} else {
					return item;
				}
			})
			
			return newItems;
		}
		//positive update
		const oldItems = items;
		const newItems = updateItems(id);
		setItems(newItems);
		const isComplete = oldItems.find(item => item.id === id)?.completed;
		actionPatch(`${updatePage}/${id}`, {completed:!isComplete})
			.catch(() => {
				toast.error('Sorry, a error has occured');
				setItems(oldItems);
			});
	}
	
	const deleteTask = (id) => {
		actionDelete(`${updatePage}/${id}`)
			.then(() => {
				const newItems = items.filter(item => item.id !== id);
				setItems(newItems);
				toast.success('task was removed')
			})
			.catch(() => (toast.error('Sorry, a error has occured')));
	}

    const isLoading = items === null;

    return (
		<AppContext.Provider value={{
			items,
			isLoading,
			addTask,
			toggleTask,
			deleteTask,
		}}>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext);
}