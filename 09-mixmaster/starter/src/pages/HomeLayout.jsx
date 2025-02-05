import { Link, Outlet, useNavigation } from 'react-router-dom';
import {Navbar} from '../pages';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const HomeLayout = () => {
  //const navigation = useNavigation();
  //const isLoading = navigation.state === 'loading';

  return (
    <>
	  <ToastContainer position='top-center'/>
      <Navbar/>
	  <section className='page'>
		<Outlet/>
	  </section>
    </>
  );
};

export default HomeLayout;
