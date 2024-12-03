import { Link, Outlet } from 'react-router-dom';
import {Navbar} from '../pages';

const HomeLayout = () => {
  return (
    <div>
      <Navbar/>
	    <Outlet/>
    </div>
  );
};

export default HomeLayout;
