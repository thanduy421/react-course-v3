import { RouterProvider } from 'react-router-dom';
import { queryClient, router } from './pageRoutes';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  return (
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
	</QueryClientProvider>
	);
};

export default App;
