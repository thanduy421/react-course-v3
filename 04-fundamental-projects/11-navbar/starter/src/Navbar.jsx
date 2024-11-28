import { links, social } from "./data";
import { useState, useRef, useEffect  } from "react";
import logo from './logo.svg';
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [showLinks,setShowLinks] = useState(false);
    const linkContainerRef = useRef(null);

    const handleClick = () => {
        setShowLinks(!showLinks);
    }

    const linkHeight = showLinks? linkContainerRef.current.getBoundingClientRect().height : 0;

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo" className="logo" />
                    <button 
                    className="nav-toggle" 
                    onClick={handleClick}>
                        <FaBars/>
                    </button>
                </div>
                <div className={'link-container'}
                     style={{ height: `${linkHeight}px`}}
                >
                    <ul className="links" ref={linkContainerRef}>
                        {links.map(link => {
                            const {id, url, text} = link;
                            return (<li key={id}>
                                    <a href={url} target="_blank">{text}</a>
                                </li>)
                        })}
                    </ul>
                </div>
                <div className="social-container">
                <ul className="social">
                        {social.map(s => {
                            const {id, url, icon} = s;
                            return (<li key={id}>
                                    <a href={url} target="_blank">{icon}</a>
                                </li>)
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
  };
  export default Navbar;
  