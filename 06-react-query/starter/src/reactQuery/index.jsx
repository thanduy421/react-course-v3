import { 
	QueryClient, 
	QueryClientProvider,
	useQuery,
	useQueryClient,
	useMutation,
} from '@tanstack/react-query';
import authFetch from '../axios/utils';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';


const queryClient = new QueryClient();

export const AppProvider = ({children}) => {
	return (
	<QueryClientProvider client={queryClient}>
		{children}
	</QueryClientProvider>
	)
}

const page = '/users/1/todos';
const updatePage = '/todos';

export const useFetchTasks = () => {
	const { isLoading, data, error, isError } = useQuery({
		queryKey: ['tasks'],
		queryFn: async () => {
			const {data} = await authFetch(page);
			return data;
		}
    });
	
	return {isLoading, isError, data};
}

export const useCreateTask = () => {
	const queryClient = useQueryClient();
	const {mutate: createTask, isLoading} = useMutation({
		mutationFn: async(taskTitle) => {
			//dummy server didn't add to it's database
			const {data} = await authFetch.post(page, {title: taskTitle, completed:false});
			console.log(data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey:['tasks'] });
			toast.success('new Task was added');
		},
		onError: (error) => {
			toast.error('Sorry, an error has occured');
			console.error(error.response.data.msg);
		}
	});

	return {createTask, isLoading};
};

export const useToggleTask = () => {
	const queryClient = useQueryClient();
	const {mutate: toggleTask} = useMutation({
		mutationFn: async({id, isCompleted}) => {
			//dummy server didn't add to it's database
			const {data} = await authFetch.patch(`${updatePage}/${id}`, {completed:isCompleted});
			console.log(data);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey:['tasks'] });
		},
		onError: (error) => {
			toast.error('Sorry, an error has occured');
			console.error(error.response.data.msg);
		}
	});	

	return {toggleTask};
}

export const useDeleteTask = () => {
	const queryClient = useQueryClient();
	const {mutate: deleteTask, isLoading} = useMutation({
		mutationFn: async(id) => {
			//dummy server didn't add/update to it's database
			const response = await authFetch.delete(`${updatePage}/${id}`);
			console.log(response);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey:['tasks'] });
		},
		onError: (error) => {
			toast.error('Sorry, an error has occured');
			console.error(error.response.data.msg);
		}
	});

	return {deleteTask, isLoading};
}