import Navbar from "./Navbar";
import Sidebar from './Sidebar';
import Hero from './Hero';
import Submenu from './Submenu';

const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Submenu/>
      <Hero/>
      <Sidebar/>
    </div>
  );
};
export default App;
