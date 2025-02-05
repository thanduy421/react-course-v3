import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SinglePageError,
} from './pages';
import { createBrowserRouter } from 'react-router-dom';
import { landingLoader, singleCocktailLoader } from './utils/loaders';
import { newsletterAction } from './utils/actions';
import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		}
	}
})

export const router = createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout />,
        errorElement: <Error />,
        children: [
          {
            index: true,
			loader: landingLoader,
			errorElement: <SinglePageError/>,
            element: <Landing />,
          },
          {
            path: 'cocktail/:id',
			loader:singleCocktailLoader(queryClient),
			errorElement:<SinglePageError/>,
            element: <Cocktail />,
          },
          {
            path: 'newsletter',
            element: <Newsletter />,
			action:newsletterAction,
          },
          {
            path: 'about',
            element: <About />,
          },		
        ]
    }

]);