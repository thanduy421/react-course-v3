import logo from "./logo.svg";
import {FaTimes} from "react-icons/fa";
import { links, social } from "./data";
import {useGlobalContext} from "./context"

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar} = useGlobalContext();

    return (
        <aside className={isSidebarOpen?"sidebar show-sidebar":"sidebar"}>
            <div className="sidebar-header">
                <img src={logo} alt="logo" className="logo" />
                <button 
                    className="close-sidebar-btn" 
                    onClick={closeSidebar}
                ><FaTimes/></button>
            </div>
            <div className="link-container">
                    <ul className="links">
                        {links.map(link => {
                            const {id, url, text, icon} = link;
                            return (<li key={id}>
                                    <a href={url} target="_blank">{icon} {text}</a>
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
        </aside>
    );
};
export default Sidebar;