import { useGlobalContext } from "./context";
import {FaBars} from 'react-icons/fa';
import NavLinks from './NavLinks';

const Navbar = () => {
  const {openSidebar, setSelectPageID} = useGlobalContext();
  const handleSubmenu = (e) => {
    // console.log(e.target.classList);
    if(!(e.target.classList.contains('page') || e.target.classList.contains('navlinks'))) {
      setSelectPageID(null);
    }
  }

    return (
      <nav className="navbar" onMouseOver={handleSubmenu}>
        <div className="nav-center">
          <h3 className="logo">strapi</h3>
          <button className="navbar-toggle-btn" onClick={openSidebar}><FaBars/></button>
          <NavLinks/>
        </div>
      </nav>
    );
  };
  export default Navbar;
  