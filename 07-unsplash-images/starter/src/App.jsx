import ThemeToggle from './ThemeToggle';
import SearchForm from './SearchForm';
import Gallery from './Gallery';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
	<main>
		<ToastContainer position='top-center' />
		<ThemeToggle/>
		<SearchForm/>
		<Gallery/>
	</main>
	);
};
export default App;
