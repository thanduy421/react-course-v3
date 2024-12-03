import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from './pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
	<Router>
		<Routes>
			<Route exact path="/" element={<HomeLayout/>} />
			<Route path="/about" element={<About/>} />
			<Route path="/landing" element={<Landing/>} />
			<Route path="/cocktail" element={<Cocktail/>} />
			<Route path="/newsletter" element={<Newsletter/>} />
			<Route path="*" element={<Error />} />  {/* Fallback route for 404 errors */}
		</Routes>
	</Router>
	);
};
export default App;
