import {FaTimes} from "react-icons/fa";
import {useGlobalContext} from "./context";
import sublinks from './data';

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return (
    <aside className={isSidebarOpen? "sidebar show-sidebar":"sidebar"}>
        <div className="sidebar-containter">
        <button 
            className="close-sidebar-btn" 
            onClick={closeSidebar}
        ><FaTimes/></button>
        <div className="link-container">
                <ul className="sub-links">
                    {sublinks.map(sublink => {
                        const {pageId, page, links} = sublink;
                        return (<li key={pageId}>
                                <h4 className='page-header'>{page}</h4>
                                <ul className='links'>
                                  {links.map(link => {
                                    const {id, label, icon, url} = link;
                                    return(
                                      <li key={id}>
                                          <a href={url} target="_blank">{icon} {label}</a>
                                      </li>
                                    )
                                  })
                                  }
                                </ul>
                            </li>)
                    })}
                </ul>
          </div>
        </div>
    </aside>
    )
};
  export default Sidebar;
  